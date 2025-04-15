function startChat() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("chatContainer").style.display = "flex";

  addMessage("Никита", "Привет! Это переписка страшная, надеюсь, ты не испугаешься...");
  addMessage("Аня", "А кто здесь?");
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chatBox");
  const message = document.createElement("div");
  message.classList.add("chat-message");
  message.innerHTML = <strong>${sender}:</strong> ${text};
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text !== "") {
    addMessage("Ты", text);
    input.value = "";

    setTimeout(() => {
      addMessage("Богдан", "Интересно... ты точно человек?");
    }, 1000);
  }
}