// Medical RAG Chatbot - Enhanced JavaScript

class MedicalChatbot {
    constructor() {
        this.isLoading = false;
        this.chatMessages = document.getElementById('chat-messages');
        this.messageInput = document.getElementById('message-input');
        this.sendBtn = document.getElementById('send-btn');
        this.chatForm = document.getElementById('chat-form');
        this.loadingIndicator = document.getElementById('loading-indicator');
        this.welcomeCard = document.getElementById('welcome-card');
        this.messageCount = document.getElementById('message-count');
        this.clearChatBtn = document.getElementById('clear-chat-btn');
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.autoResizeTextarea();
        this.updateMessageCount();
        this.scrollToBottom();
        this.hideWelcomeCardIfMessages();
    }

    bindEvents() {
        // Form submission
        this.chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.sendMessage();
        });

        // Enter key handling
        this.messageInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // Quick question buttons
        document.querySelectorAll('.quick-question-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const question = e.target.getAttribute('data-question');
                this.messageInput.value = question;
                this.sendMessage();
            });
        });

        // Clear chat button
        this.clearChatBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.clearChat();
        });

        // Auto-focus input
        this.messageInput.focus();

        // Typing indicator
        this.messageInput.addEventListener('input', () => {
            this.autoResizeTextarea();
        });
    }

    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isLoading) return;

        // Hide welcome card
        this.hideWelcomeCard();

        // Add user message to chat
        this.addMessageToChat('user', message);
        
        // Clear input and disable form
        this.messageInput.value = '';
        this.setLoadingState(true);
        
        // Show loading indicator
        this.showLoadingIndicator();

        try {
            // Send message to server
            const response = await this.sendToServer(message);
            
            // Hide loading indicator
            this.hideLoadingIndicator();
            
            // Add assistant response
            this.addMessageToChat('assistant', response.response, {
                timestamp: response.timestamp,
                processingTime: response.processing_time
            });

        } catch (error) {
            console.error('Error sending message:', error);
            this.hideLoadingIndicator();
            this.addMessageToChat('system', `Sorry, I encountered an error: ${error.message}`);
        } finally {
            this.setLoadingState(false);
            this.updateMessageCount();
            this.scrollToBottom();
        }
    }

    async sendToServer(message) {
        const formData = new FormData();
        formData.append('prompt', message);

        const response = await fetch('/', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // For now, we'll use the form submission approach
        // In the future, you could implement AJAX with the /api/chat endpoint
        window.location.reload();
    }

    addMessageToChat(role, content, metadata = {}) {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = `message-wrapper ${role}-message fade-in`;
        
        const timestamp = metadata.timestamp || this.getCurrentTime();
        
        let iconClass, roleName;
        switch(role) {
            case 'user':
                iconClass = 'fas fa-user-circle text-primary';
                roleName = 'You';
                break;
            case 'assistant':
                iconClass = 'fas fa-robot text-success';
                roleName = 'Medical Assistant';
                break;
            default:
                iconClass = 'fas fa-exclamation-circle text-warning';
                roleName = 'System';
        }

        messageWrapper.innerHTML = `
            <div class="message-content">
                <div class="message-header">
                    <div class="d-flex align-items-center">
                        <i class="${iconClass} me-2"></i>
                        <strong>${roleName}</strong>
                        <small class="text-muted ms-auto">${timestamp}</small>
                    </div>
                </div>
                <div class="message-body">
                    ${this.formatMessage(content)}
                </div>
                ${metadata.processingTime ? `
                    <div class="message-footer">
                        <small class="text-muted">
                            <i class="fas fa-clock me-1"></i>
                            Processed in ${metadata.processingTime}
                        </small>
                    </div>
                ` : ''}
            </div>
        `;

        // Remove empty state if exists
        const emptyState = this.chatMessages.querySelector('.text-center');
        if (emptyState) {
            emptyState.remove();
        }

        this.chatMessages.appendChild(messageWrapper);
        this.scrollToBottom();
    }

    formatMessage(content) {
        // Convert line breaks to HTML
        return content.replace(/\n/g, '<br>');
    }

    showLoadingIndicator() {
        this.loadingIndicator.classList.remove('d-none');
        this.scrollToBottom();
    }

    hideLoadingIndicator() {
        this.loadingIndicator.classList.add('d-none');
    }

    setLoadingState(loading) {
        this.isLoading = loading;
        this.sendBtn.disabled = loading;
        this.messageInput.disabled = loading;
        
        if (loading) {
            this.sendBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            this.chatForm.classList.add('loading');
        } else {
            this.sendBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
            this.chatForm.classList.remove('loading');
            this.messageInput.focus();
        }
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    autoResizeTextarea() {
        // Auto-resize functionality can be added here if needed
        // Currently using input field, but can be extended for textarea
    }

    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    updateMessageCount() {
        const messages = this.chatMessages.querySelectorAll('.message-wrapper');
        const count = messages.length;
        this.messageCount.textContent = `${count} message${count !== 1 ? 's' : ''}`;
    }

    hideWelcomeCard() {
        if (this.welcomeCard) {
            this.welcomeCard.style.display = 'none';
        }
    }

    hideWelcomeCardIfMessages() {
        const messages = this.chatMessages.querySelectorAll('.message-wrapper');
        if (messages.length > 0) {
            this.hideWelcomeCard();
        }
    }

    clearChat() {
        if (confirm('Are you sure you want to clear the chat history?')) {
            window.location.href = '/clear';
        }
    }

    // Utility methods
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = 'top: 80px; right: 20px; z-index: 1050; min-width: 300px;';
        notification.innerHTML = `
            <i class="fas fa-${this.getNotificationIcon(type)} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }

    getNotificationIcon(type) {
        const icons = {
            'success': 'check-circle',
            'danger': 'exclamation-triangle',
            'warning': 'exclamation-circle',
            'info': 'info-circle'
        };
        return icons[type] || 'info-circle';
    }

    // Keyboard shortcuts
    bindKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K to focus input
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.messageInput.focus();
            }
            
            // Escape to clear input
            if (e.key === 'Escape') {
                this.messageInput.value = '';
                this.messageInput.blur();
            }
        });
    }

    // Auto-save draft functionality
    saveDraft() {
        const message = this.messageInput.value;
        if (message.trim()) {
            localStorage.setItem('medical_chatbot_draft', message);
        }
    }

    loadDraft() {
        const draft = localStorage.getItem('medical_chatbot_draft');
        if (draft) {
            this.messageInput.value = draft;
        }
    }

    clearDraft() {
        localStorage.removeItem('medical_chatbot_draft');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize the chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new MedicalChatbot();
    
    // Add some additional enhancements
    chatbot.bindKeyboardShortcuts();
    
    // Auto-save draft every 2 seconds
    setInterval(() => {
        chatbot.saveDraft();
    }, 2000);
    
    // Load draft on page load
    chatbot.loadDraft();
    
    // Clear draft when message is sent
    const originalSendMessage = chatbot.sendMessage.bind(chatbot);
    chatbot.sendMessage = function() {
        chatbot.clearDraft();
        return originalSendMessage();
    };
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add service worker registration for PWA capabilities (optional)
    if ('serviceWorker' in navigator) {
        // Service worker can be added here for offline capabilities
    }
    
    // Add theme toggle functionality (optional)
    const themeToggle = document.createElement('button');
    themeToggle.className = 'btn btn-outline-secondary btn-sm position-fixed';
    themeToggle.style.cssText = 'bottom: 20px; right: 20px; z-index: 1050;';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.title = 'Toggle Dark Mode';
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = `<i class="fas fa-${isDark ? 'sun' : 'moon'}"></i>`;
        localStorage.setItem('darkMode', isDark);
    });
    
    // Load saved theme
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.body.appendChild(themeToggle);
    
    console.log('🏥 Medical RAG Chatbot initialized successfully!');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}
