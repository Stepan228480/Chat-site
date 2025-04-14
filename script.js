const startBtn = document.getElementById('start-chat');
const startScreen = document.getElementById('start-screen');
const chatScreen = document.getElementById('chat-screen');
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const messages = [
  { sender: "Никита", text: "Привет!" },
  { sender: "Никита", text: "Как дела?" },
  { sender: "Вы", text: "Хорошо, а у вас как?" },
  { sender: "Никита", text: "У меня тоже все отлично." },
  { sender: "Богдан", text: "У меня тоже." },
  { sender: "Аня", text: "У меня тоже!" },
  { sender: "Вы", text: "Круто. А зачем мы все тут?" },
  { sender: "Никита", text: "Да просто пришли погулять." },
  { sender: "Аня", text: "Карнавал ведь!" },
  { sender: "Богдан", text: "Но есть странное чувство..." },
  { sender: "Вы", text: "Какое?" },
  { sender: "Богдан", text: "Будто кто-то наблюдает." },
  { sender: "Никита", text: "Эй, не пугай!" },
  { sender: "Аня", text: "Мне уже страшно..." },
  { sender: "Вы", text: "Может, это просто карнавал?" },
  { sender: "Богдан", text: "Или что-то большее." },
  { sender: "Никита", text: "Ты о чём?" },
  { sender: "Богдан", text: "Некоторые люди... ведут себя неестественно." },
  { sender: "Аня", text: "Как будто они не настоящие." },
  { sender: "Вы", text: "Ненастоящие?" }
];

let msgIndex = 0;

startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  chatScreen.classList.remove('hidden');
  showNextMessage();
});

sendBtn.addEventListener('click', () => {
  if (msgIndex < messages.length) {
    const msg = messages[msgIndex];
    addMessage(msg.sender, msg.text);
    msgIndex++;
  }
});

function addMessage(sender, text) {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message');
  if (sender === "Вы") messageEl.classList.add('user');
  messageEl.innerText = ${sender}: ${text};
  chatBox.appendChild(messageEl);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showNextMessage() {
  if (msgIndex < messages.length) {
    const msg = messages[msgIndex];
    addMessage(msg.sender, msg.text);
    msgIndex++;
  }
}
