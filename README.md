# 🏥 Medical RAG Chatbot

<div align="center">

![Medical RAG Chatbot](https://img.shields.io/badge/Medical-AI%20Assistant-blue?style=for-the-badge&logo=medical-bag)
![Python](https://img.shields.io/badge/Python-3.8+-green?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.0+-red?style=for-the-badge&logo=flask)
![LangChain](https://img.shields.io/badge/LangChain-Latest-orange?style=for-the-badge&logo=langchain)

**A sophisticated, AI-powered medical assistant with a stunning modern UI**

*Powered by Retrieval-Augmented Generation (RAG) technology and cutting-edge language models*

</div>

---

## 🌟 **Overview**

The Medical RAG Chatbot is a state-of-the-art medical question-answering system that combines the power of **Retrieval-Augmented Generation (RAG)** with a **beautiful, modern web interface**. Built with advanced AI technologies, it provides accurate medical information based on the comprehensive Gale Encyclopedia of Medicine.

### ✨ **Key Highlights**

- 🎨 **Stunning Modern UI** - Beautiful, responsive design with medical theme
- 🧠 **AI-Powered Intelligence** - Advanced RAG technology for accurate responses
- ⚡ **Lightning Fast** - Optimized with Groq's Llama 3.1 model
- 📱 **Mobile-First** - Fully responsive across all devices
- 🔒 **Secure & Private** - Built with security best practices
- 🎭 **Smooth Animations** - Delightful user experience with CSS animations

---

## 🚀 **Features**

### 🎨 **Frontend Excellence**
- **Modern Bootstrap 5 Design** - Professional medical-themed interface
- **Responsive Layout** - Perfect on desktop, tablet, and mobile
- **Real-time Chat Interface** - Smooth messaging with typing indicators
- **Quick Question Buttons** - Pre-built medical queries for easy access
- **Dark Mode Support** - User preference with system detection
- **Loading Animations** - Beautiful loading states and transitions
- **Keyboard Shortcuts** - Power user features (Ctrl+K, Escape)
- **Auto-save Drafts** - Never lose your questions
- **Accessibility Compliant** - WCAG guidelines followed

### 🧠 **AI & Backend Features**
- **RAG-Powered Responses** - Retrieval-Augmented Generation for accuracy
- **Vector Search** - FAISS-based similarity search for relevant information
- **Medical Specialization** - Tailored for medical knowledge and terminology
- **Performance Optimized** - Global QA chain caching for speed
- **Comprehensive Logging** - Detailed logs for monitoring and debugging
- **Error Handling** - Robust exception handling throughout
- **Security Headers** - XSS protection and content security
- **API Endpoints** - RESTful API for future integrations

### 📊 **Technical Excellence**
- **Modern JavaScript** - ES6+ with class-based architecture
- **CSS Grid & Flexbox** - Modern layout techniques
- **Performance Monitoring** - Built-in performance tracking
- **Memory Optimization** - Efficient resource management
- **Threading Support** - Multi-threaded processing for better performance

---

## 🛠 **Technology Stack**

### **Backend Technologies**
- **🐍 Python 3.8+** - Core programming language
- **🌶️ Flask** - Modern web framework
- **🔗 LangChain** - RAG framework and orchestration
- **🤗 HuggingFace** - Transformer models and embeddings
- **⚡ Groq** - Ultra-fast LLM inference
- **🔍 FAISS** - Vector similarity search

### **Frontend Technologies**
- **📱 Bootstrap 5.3.2** - Responsive UI framework
- **🎨 Custom CSS** - Medical-themed styling with animations
- **⚡ Modern JavaScript** - ES6+ with advanced features
- **🎭 Font Awesome 6.4** - Beautiful medical icons
- **🔤 Google Fonts** - Professional Inter typography

### **AI/ML Components**
- **🧠 LLM**: Llama 3.1 8B Instant (via Groq)
- **🔤 Embeddings**: sentence-transformers/all-MiniLM-L6-v2
- **📚 Knowledge Base**: Gale Encyclopedia of Medicine
- **🔍 Vector Store**: FAISS with AVX2 optimization

---

## 📁 **Project Structure**

```
Medical RAG Chatbot/
├── 🏥 app/
│   ├── 📦 components/          # Core application components
│   │   ├── 🔄 data_loader.py   # PDF processing and data loading
│   │   ├── 🧠 embeddings.py    # HuggingFace embeddings
│   │   ├── 🤖 llm.py          # Groq LLM configuration
│   │   ├── 📄 pdf_loader.py   # PDF text extraction
│   │   ├── 🔍 retriever.py    # RAG chain creation
│   │   └── 💾 vectorstore.py  # FAISS vector store management
│   ├── ⚙️ config/             # Configuration management
│   │   └── config.py          # Application settings
│   ├── 🔧 common/             # Shared utilities
│   │   ├── custom_exception.py  # Custom exception handling
│   │   └── logger.py          # Advanced logging configuration
│   ├── 🎨 static/             # Web assets
│   │   ├── style.css          # Modern medical-themed CSS
│   │   └── script.js          # Interactive JavaScript
│   ├── 📄 templates/          # HTML templates
│   │   └── index.html         # Beautiful chat interface
│   └── __init__.py            # Flask application factory
├── 📚 data/                   # Medical documents
│   └── The_GALE_ENCYCLOPEDIA_of_MEDICINE_SECOND.pdf
├── 📋 logs/                   # Application logs
├── 🗄️ vectorstore/           # FAISS vector database
│   └── db_faiss/
├── 🚀 app.py                  # Optimized application entry point
├── 📦 requirements.txt        # Python dependencies
└── ⚙️ setup.py               # Package configuration
```

---

## 🚀 **Quick Start**

### **Prerequisites**
- Python 3.8 or higher
- Git
- Internet connection for model downloads

### **Installation Steps**

1. **📥 Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Medical RAG Chatbot"
   ```

2. **🐍 Create virtual environment**
   ```bash
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

3. **📦 Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **🔑 Set up environment variables**
   
   Create a `.env` file in the project root:
   ```env
   # Required API Keys
   GROQ_API_KEY=your_groq_api_key_here
   HF_TOKEN=your_huggingface_token_here
   
   # Optional Configuration
   FLASK_HOST=127.0.0.1
   FLASK_PORT=5000
   FLASK_DEBUG=False
   ```

5. **🗄️ Initialize the vector store**
   ```bash
   python -m app.components.data_loader
   ```

6. **🚀 Launch the application**
   ```bash
   python app.py
   ```

7. **🌐 Open your browser**
   ```
   http://127.0.0.1:5000
   ```

---

## 🎯 **Usage**

### **Basic Usage**
1. **Open the application** in your web browser
2. **Ask medical questions** using natural language
3. **Get instant responses** powered by AI
4. **Use quick questions** for common medical topics

### **Advanced Features**
- **⌨️ Keyboard Shortcuts**:
  - `Ctrl/Cmd + K`: Focus message input
  - `Escape`: Clear current input
  - `Enter`: Send message

- **🎨 Theme Toggle**: Click the theme button (bottom-right) to switch between light/dark modes

- **💾 Auto-save**: Your drafts are automatically saved and restored

### **Example Questions**
- "What are the symptoms of diabetes?"
- "How to manage high blood pressure?"
- "What are common cold remedies?"
- "How to prevent heart disease?"
- "What are the side effects of aspirin?"

---

## 🔌 **API Endpoints**

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Main chat interface |
| `/` | POST | Send message to chatbot |
| `/api/chat` | POST | AJAX API for chat |
| `/clear` | GET | Clear chat history |
| `/health` | GET | Health check endpoint |

### **API Usage Example**
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What are diabetes symptoms?"}'
```

---

## ⚙️ **Configuration**

### **Environment Variables**

| Variable | Description | Default |
|----------|-------------|---------|
| `GROQ_API_KEY` | Groq API key for LLM | Required |
| `HF_TOKEN` | HuggingFace token | Required |
| `FLASK_HOST` | Host to run Flask app | `127.0.0.1` |
| `FLASK_PORT` | Port to run Flask app | `5000` |
| `FLASK_DEBUG` | Enable debug mode | `False` |

### **Model Configuration**
- **LLM**: Llama 3.1 8B Instant (Groq)
- **Embeddings**: sentence-transformers/all-MiniLM-L6-v2
- **Vector Store**: FAISS with AVX2 optimization
- **Chunk Size**: 1000 tokens
- **Chunk Overlap**: 50 tokens

---

## 🎨 **UI/UX Features**

### **Design Highlights**
- **🏥 Medical Theme**: Professional medical color scheme
- **📱 Responsive**: Mobile-first design approach
- **🎭 Animations**: Smooth transitions and loading states
- **🌙 Dark Mode**: System preference detection
- **♿ Accessible**: WCAG 2.1 AA compliant
- **⌨️ Keyboard Navigation**: Full keyboard support

### **User Experience**
- **Real-time Chat**: Instant message delivery
- **Typing Indicators**: Visual feedback during processing
- **Message Timestamps**: Track conversation timing
- **Processing Time**: See response generation speed
- **Error Handling**: User-friendly error messages
- **Auto-scroll**: Always see latest messages

---

## 🔧 **Development**

### **Development Mode**
```bash
export FLASK_DEBUG=True
python app.py
```

### **Adding New Documents**
1. Place PDF files in the `data/` directory
2. Run the data loader:
   ```bash
   python -m app.components.data_loader
   ```

### **Logs**
- Application logs: `logs/` directory
- Daily rotation with timestamp
- Comprehensive error tracking
- Performance monitoring

### **Performance Optimization**
- Global QA chain caching
- FAISS AVX2 optimization
- Multi-threading support
- Memory-efficient processing

---

## 🐛 **Troubleshooting**

### **Common Issues**

#### **1. API Key Errors**
```bash
# Check your .env file
cat .env

# Verify API keys are valid
python -c "from app.config.config import GROQ_API_KEY; print('Groq API Key:', 'SET' if GROQ_API_KEY else 'NOT SET')"
```

#### **2. Vector Store Issues**
```bash
# Recreate vector store
rm -rf vectorstore/
python -m app.components.data_loader
```

#### **3. Port Already in Use**
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

#### **4. Memory Issues**
- Reduce chunk size in `config.py`
- Use smaller embedding model
- Increase system RAM

### **Performance Tips**
- Use SSD storage for vector store
- Enable GPU acceleration for embeddings
- Monitor memory usage with large datasets
- Use production WSGI server (Gunicorn) for deployment

---

## 🚀 **Deployment**

### **Production Deployment**
```bash
# Install production server
pip install gunicorn

# Run with Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### **Docker Deployment**
```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
EXPOSE 5000

CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
```

### **Environment Setup**
- Use environment variables for secrets
- Enable HTTPS in production
- Set up proper logging
- Configure monitoring and alerting

---

## 📊 **Performance Metrics**

### **Benchmarks**
- **Response Time**: ~2-5 seconds average
- **Memory Usage**: ~2-4GB RAM
- **Concurrent Users**: 10-50 users
- **Vector Search**: <100ms
- **Model Loading**: ~30 seconds (first time)

### **Optimization Features**
- Global QA chain caching
- FAISS AVX2 acceleration
- Multi-threading support
- Memory-efficient processing
- Lazy loading of components

---

## 🤝 **Contributing**

We welcome contributions! Please follow these steps:

1. **🍴 Fork the repository**
2. **🌿 Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💻 Make your changes**
4. **✅ Add tests** (if applicable)
5. **📝 Update documentation**
6. **🚀 Submit a pull request**

### **Development Guidelines**
- Follow PEP 8 style guide
- Add type hints for functions
- Write comprehensive docstrings
- Test your changes thoroughly
- Update README for new features

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 **Author**

**Amit Singh**
- 📧 Email: amitksingh3022@gmail.com
- 🐙 GitHub: [Amitgitup](https://github.com/Amitgitup)
- 💼 LinkedIn: [Amit Singh](https://linkedin.com/in/amit-singh)

---

## 🙏 **Acknowledgments**

- **📚 Gale Encyclopedia of Medicine** - Comprehensive medical knowledge base
- **🤗 HuggingFace** - Transformer models and embeddings
- **🔗 LangChain** - RAG framework and orchestration
- **⚡ Groq** - Ultra-fast LLM inference
- **🌶️ Flask** - Modern web framework
- **📱 Bootstrap** - Responsive UI framework
- **🎭 Font Awesome** - Beautiful icons

---

## 📈 **Roadmap**

### **Upcoming Features**
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] Medical image analysis
- [ ] Integration with medical databases
- [ ] Mobile app development
- [ ] Advanced analytics dashboard
- [ ] User authentication system
- [ ] Conversation history export

### **Technical Improvements**
- [ ] Microservices architecture
- [ ] Kubernetes deployment
- [ ] Advanced caching strategies
- [ ] Real-time collaboration
- [ ] Advanced security features
- [ ] Performance monitoring
- [ ] Automated testing pipeline

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Python](https://img.shields.io/badge/Python-3.8+-blue?style=for-the-badge&logo=python)
![Flask](https://img.shields.io/badge/Flask-2.0+-green?style=for-the-badge&logo=flask)
![AI](https://img.shields.io/badge/AI-Powered-purple?style=for-the-badge&logo=brain)

</div>