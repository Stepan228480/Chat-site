const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const messagesDiv = document.getElementById("messages");

sendButton.addEventListener("click", sendMessage);

function sendMessage() {
    const userMessage = userInput.value.trim();

    if (userMessage === "") return; // Не отправлять пустые сообщения

    // Добавление сообщения пользователя в чат
    const messageElement = document.createElement("div");
    messageElement.classList.add("user-message");
    messageElement.textContent = userMessage;
    messagesDiv.appendChild(messageElement);

    // Очистить поле ввода
    userInput.value = "";

    // Прокрутить чат вниз
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

    // Имитация ответа системы (персонажа)
    setTimeout(() => {
        const responseMessage = document.createElement("div");
        responseMessage.classList.add("response-message");
        responseMessage.textContent = getRandomResponse();
        messagesDiv.appendChild(responseMessage);

        // Прокрутить чат вниз
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 1000); // Ответ появится через 1 секунду
}

function getRandomResponse() {
    const responses = [
        "Привет! Как дела?",
        "Я загадочный персонаж!",
        "Что ты хочешь узнать?",
        "Я не могу всё рассказать сразу...",
        "Осторожно! Это не простая история."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
function startChat() {
    // Скрыть предысторию и показать чат
    document.getElementById("intro").style.display = "none";
    document.getElementById("chat").style.display = "block";

    // Добавить первое сообщение от бота
    addMessage("Привет, кто ты?", "bot");
}

function addMessage(text, sender) {
    const messageContainer = document.getElementById("chat");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    messageContainer.appendChild(messageDiv);

    // Прокрутить чат вниз, чтобы показать последнее сообщение
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function sendMessage() {
    const inputField = document.getElementById("inputField");
    const message = inputField.value;

    if (message) {
        // Добавить сообщение пользователя в чат
        addMessage(message, "user");

        // Очистить поле ввода
        inputField.value = "";

        // Ответ от бота (можно будет дополнить логику с искусственным интеллектом)
        setTimeout(() => {
            addMessage("Интересно... расскажи больше.", "bot");
        }, 1000);
    }
}
