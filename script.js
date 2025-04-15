function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() !== "") {
    const userMessage = document.createElement("div");
    userMessage.textContent = "Ты: " + input.value;
    chatBox.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.textContent = "Бот: " + getBotReply(input.value);
    chatBox.appendChild(botMessage);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

function getBotReply(message) {
  const lower = message.toLowerCase();
  if (lower.includes("привет")) return "Привет!";
  if (lower.includes("как дела")) return "Всё хорошо!";
  return "Интересно!";
}
