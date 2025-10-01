# Medical RAG Chatbot

A sophisticated medical question-answering chatbot built with LangChain, HuggingFace, and Flask. The system uses Retrieval-Augmented Generation (RAG) to provide accurate medical information based on the Gale Encyclopedia of Medicine.

## Features

- **Modern Web Interface**: Beautiful, responsive chat interface with medical theme
- **RAG-Powered**: Uses vector embeddings and retrieval for accurate responses
- **Medical Focus**: Specialized for medical questions and information
- **Real-time Chat**: Interactive chat experience with typing indicators
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices
- **Error Handling**: Robust error handling and user feedback

## Technology Stack

- **Backend**: Python, Flask, LangChain
- **AI/ML**: HuggingFace Transformers, FAISS Vector Store
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Embeddings**: sentence-transformers/all-MiniLM-L6-v2
- **LLM**: Mistral-7B-Instruct-v0.3

## Project Structure

```
Medical RAG Chatbot/
├── app/
│   ├── components/          # Core application components
│   │   ├── data_loader.py   # PDF processing and data loading
│   │   ├── embeddings.py    # HuggingFace embeddings
│   │   ├── llm.py          # Language model configuration
│   │   ├── pdf_loader.py   # PDF text extraction
│   │   ├── retriever.py    # RAG chain creation
│   │   └── vectorstore.py  # FAISS vector store management
│   ├── config/             # Configuration management
│   │   └── config.py       # Application settings
│   ├── common/             # Shared utilities
│   │   ├── custom_exception.py  # Custom exception handling
│   │   └── logger.py       # Logging configuration
│   ├── static/             # Static web assets
│   │   ├── style.css       # Modern CSS styling
│   │   └── script.js       # Interactive JavaScript
│   ├── templates/          # HTML templates
│   │   └── index.html      # Main chat interface
│   └── __init__.py         # Flask application factory
├── data/                   # Medical documents
│   └── The_GALE_ENCYCLOPEDIA_of_MEDICINE_SECOND.pdf
├── logs/                   # Application logs
├── vectorstore/            # FAISS vector database
│   └── db_faiss/
├── app.py                  # Main application entry point
├── requirements.txt        # Python dependencies
└── setup.py               # Package configuration
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd "Medical RAG Chatbot"
   ```

2. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**:
   Create a `.env` file in the project root:
   ```env
   HF_TOKEN=your_huggingface_token_here
   FLASK_HOST=127.0.0.1
   FLASK_PORT=5000
   FLASK_DEBUG=True
   ```

5. **Initialize the vector store**:
   ```bash
   python -m app.components.data_loader
   ```

## Usage

1. **Start the application**:
   ```bash
   python app.py
   ```

2. **Open your browser** and navigate to:
   ```
   http://127.0.0.1:5000
   ```

3. **Start chatting** with the medical chatbot!

## API Endpoints

- `GET /` - Main chat interface
- `POST /chat` - Send a message to the chatbot
- `GET /health` - Health check endpoint

## Configuration

The application can be configured through environment variables:

- `HF_TOKEN`: Your HuggingFace API token
- `FLASK_HOST`: Host to run the Flask app (default: 127.0.0.1)
- `FLASK_PORT`: Port to run the Flask app (default: 5000)
- `FLASK_DEBUG`: Enable debug mode (default: False)

## Features in Detail

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Real-time Chat**: Instant message sending and receiving
- **Typing Indicators**: Visual feedback during processing
- **Example Questions**: Quick-start question suggestions
- **Character Counter**: Input length validation
- **Error Handling**: User-friendly error messages
- **Accessibility**: Keyboard navigation and screen reader support

### Backend Features
- **RAG Pipeline**: Retrieval-Augmented Generation for accurate responses
- **Vector Search**: FAISS-based similarity search
- **Medical Focus**: Specialized prompts for medical information
- **Logging**: Comprehensive logging for debugging and monitoring
- **Error Handling**: Robust exception handling throughout the application

## Development

### Running in Development Mode
```bash
export FLASK_DEBUG=True
python app.py
```

### Logs
Application logs are stored in the `logs/` directory with daily rotation.

### Adding New Documents
1. Place PDF files in the `data/` directory
2. Run the data loader to update the vector store:
   ```bash
   python -m app.components.data_loader
   ```

## Troubleshooting

### Common Issues

1. **HuggingFace Token Error**:
   - Ensure your `HF_TOKEN` is set correctly in the `.env` file
   - Verify the token has the necessary permissions

2. **Vector Store Not Found**:
   - Run the data loader to create the vector store
   - Ensure PDF files are in the `data/` directory

3. **Port Already in Use**:
   - Change the `FLASK_PORT` in your `.env` file
   - Or kill the process using the port

### Performance Optimization

- The vector store is loaded once at startup for better performance
- Consider using a production WSGI server like Gunicorn for deployment
- Monitor memory usage with large document collections

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Author

**Amit Singh**
- Email: amitksingh3022@gmail.com
- GitHub: Amitgitup

## Acknowledgments

- Gale Encyclopedia of Medicine for the medical knowledge base
- HuggingFace for the transformer models
- LangChain for the RAG framework
- Flask for the web framework
