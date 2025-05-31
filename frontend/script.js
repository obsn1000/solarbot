document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatLog = document.getElementById('chat-log');

    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            // TODO: Send message to backend and handle response
            // For now, let's simulate a bot response
            setTimeout(() => {
                addBotMessage("This is a placeholder response. I'm still under development!");
            }, 1000);
        }
    });

    function addUserMessage(message) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user-message');
        userDiv.textContent = message;
        chatLog.appendChild(userDiv);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
    }

    function addBotMessage(message) {
        const botDiv = document.createElement('div');
        botDiv.classList.add('bot-message');
        botDiv.textContent = message;
        chatLog.appendChild(botDiv);
        chatLog.scrollTop = chatLog.scrollHeight; // Scroll to bottom
    }
});
