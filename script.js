// Функция для добавления сообщений в чат
function addMessageToChat(message, sender) {
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    
    const senderElement = document.createElement('span');
    senderElement.classList.add('sender');
    senderElement.textContent = sender;
    
    const messageText = document.createElement('span');
    messageText.classList.add('message-text');
    messageText.textContent = message;
    
    messageElement.appendChild(senderElement);
    messageElement.appendChild(messageText);
    
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight; // Прокрутка чата вниз
}

// Функция для обработки ввода сообщения
function handleMessageInput() {
    const inputField = document.getElementById('message-input');
    const message = inputField.value.trim();
    
    if (message !== "") {
        addMessageToChat(message, 'Ты');
        inputField.value = ""; // Очищаем поле ввода
    }
}

// Слушатель события на отправку сообщения
document.getElementById('send-button').addEventListener('click', handleMessageInput);

// Другая логика для ИИ-персонажей (здесь можно будет добавлять конкретные ответы)
function aiResponse(message) {
    // Пример, как можно отобразить ответ от ИИ
    if (message.includes("привет")) {
        addMessageToChat("Привет, как ты?", "AI");
    } else {
        addMessageToChat("Я не понял твоего сообщения.", "AI");
    }
}

// В случае, если хочешь реализовать более сложную логику
document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        handleMessageInput();
        aiResponse(event.target.value); // Реакция ИИ
    }
});
