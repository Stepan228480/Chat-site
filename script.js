let messages = document.querySelector('.messages');
let messageInput = document.getElementById('messageInput');

function sendMessage() {
  let messageText = messageInput.value.trim();
  if (messageText === "") return;

  let messageElement = document.createElement('div');
  messageElement.classList.add('message', 'user');
  messageElement.textContent = messageText;
  messages.appendChild(messageElement);
  messageInput.value = "";

  scrollToBottom();
  simulateResponse(messageText);
}

function simulateResponse(userMessage) {
  let response = "Это страшная история!"; // Тут можно добавить логику для ответов

  setTimeout(() => {
    let responseElement = document.createElement('div');
    responseElement.classList.add('message');
    responseElement.textContent = response;
    messages.appendChild(responseElement);
    scrollToBottom();
  }, 1000);
}

function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
