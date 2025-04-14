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
