from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from app.components.retriever import create_qa_chain
from app.common.logger import get_logger
from app.common.custom_exception import CustomException
from dotenv import load_dotenv
import os
import time
from datetime import datetime

load_dotenv()
HF_TOKEN = os.environ.get("HF_TOKEN")

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Initialize logger
logger = get_logger(__name__)

from markupsafe import Markup
def nl2br(value):
    return Markup(value.replace("\n", "<br>\n"))

app.jinja_env.filters['nl2br'] = nl2br

# Global QA chain to avoid reinitializing
qa_chain = None

@app.route("/", methods=["GET", "POST"])
def index():
    if "messages" not in session:
        session["messages"] = []

    if request.method == "POST":
        user_input = request.form.get("prompt")
        
        if user_input:
            messages = session["messages"]
            messages.append({
                "role": "user", 
                "content": user_input,
                "timestamp": datetime.now().strftime("%H:%M")
            })
            session["messages"] = messages
            
            try:
                global qa_chain
                if qa_chain is None:
                    logger.info("Initializing QA chain...")
                    qa_chain = create_qa_chain()
                
                if qa_chain is None:
                    raise Exception("QA chain could not be created (LLM or VectorStore issue)")
                
                logger.info(f"Processing query: {user_input}")
                start_time = time.time()
                response = qa_chain.invoke({"query": user_input})
                processing_time = time.time() - start_time
                
                result = response.get("result", "No response")
                
                messages.append({
                    "role": "assistant", 
                    "content": result,
                    "timestamp": datetime.now().strftime("%H:%M"),
                    "processing_time": f"{processing_time:.2f}s"
                })
                session["messages"] = messages
                logger.info(f"Response generated in {processing_time:.2f}s")

            except Exception as e:
                error_msg = f"Error: {str(e)}"
                logger.error(f"Error processing query: {str(e)}")
                messages.append({
                    "role": "system", 
                    "content": f"Sorry, I encountered an error: {str(e)}",
                    "timestamp": datetime.now().strftime("%H:%M")
                })
                session["messages"] = messages
                return render_template("index1.html", messages=session["messages"], error=error_msg)
            
        return redirect(url_for("index"))
    return render_template("index1.html", messages=session.get("messages", []))

@app.route("/clear")
def clear():
    session.pop("messages", None)
    global qa_chain
    qa_chain = None  # Reset QA chain when clearing
    return redirect(url_for("index"))

@app.route("/api/chat", methods=["POST"])
def api_chat():
    """API endpoint for AJAX chat requests"""
    try:
        data = request.get_json()
        user_input = data.get("message", "").strip()
        
        if not user_input:
            return jsonify({"error": "No message provided"}), 400
        
        global qa_chain
        if qa_chain is None:
            logger.info("Initializing QA chain for API request...")
            qa_chain = create_qa_chain()
        
        if qa_chain is None:
            return jsonify({"error": "QA chain could not be created"}), 503
        
        start_time = time.time()
        response = qa_chain.invoke({"query": user_input})
        processing_time = time.time() - start_time
        
        result = response.get("result", "No response")
        
        return jsonify({
            "response": result,
            "processing_time": f"{processing_time:.2f}s",
            "timestamp": datetime.now().strftime("%H:%M")
        })
        
    except Exception as e:
        logger.error(f"API error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/health")
def health():
    return jsonify({
        "status": "healthy",
        "service": "Medical RAG Chatbot",
        "timestamp": datetime.now().isoformat()
    })

@app.before_request
def before_request():
    """Log request details"""
    logger.info(f"Request: {request.method} {request.path} from {request.remote_addr}")

@app.after_request
def after_request(response):
    """Add security headers"""
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response

@app.context_processor
def inject_globals():
    """Inject global variables into templates"""
    return {
        'app_name': 'Medical RAG Chatbot',
        'version': '1.0.0',
        'current_year': datetime.now().year
    }

if __name__ == "__main__":
    logger.info("Starting Medical RAG Chatbot application...")
    logger.info("Application features:")
    logger.info("- AI-powered medical assistance")
    logger.info("- RAG-based knowledge retrieval")
    logger.info("- Modern responsive UI")
    logger.info("- Real-time chat interface")
    logger.info("- Performance monitoring")
    logger.info("- Security headers")
    
    # Run with optimized settings
    app.run(
        host="0.0.0.0", 
        port=5000, 
        debug=False, 
        use_reloader=False,
        threaded=True  # Enable threading for better performance
    )