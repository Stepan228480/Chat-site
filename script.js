const startButton = document.getElementById("start-chat");
const chatScreen = document.getElementById("chat-screen");
const startScreen = document.getElementById("start-screen");
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

let messageIndex = 0;

const messages = [
  { name: "Никита", text: "Привет, как дела?" },
  { name: "Вы", text: "Хорошо. А у вас как?" },
  { name: "Никита", text: "У меня тоже всё отлично!" },
  { name: "Аня", text: "У меня тоже, мы тут немного волнуемся..." },
  { name: "Богдан", text: "Хмм, здесь как-то странно, вы это чувствуете?" },
  { name: "Вы", text: "Да, тут действительно что-то не так..." },
  { name: "Аня", text: "Вы тоже это чувствуете?" },
  { name: "Никита", text: "Может просто карнавал такой странный?" },
  { name: "Богдан", text: "Нет... Я думаю, это не просто так." },
  { name: "Вы", text: "Что ты имеешь в виду?" },
  { name: "Богдан", text: "Позже объясню. Пока просто наблюдай." }
];

function showNextMessage() {
  if (messageIndex < messages.length) {
    const msg = messages[messageIndex];
    const div = document.createElement("div");
    div.textContent = ${msg.name}: ${msg.text};
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    messageIndex++;
  }
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text !== "") {
    const userMsg = document.createElement("div");
    userMsg.textContent = Вы: ${text};
    chatBox.appendChild(userMsg);
    userInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    setTimeout(showNextMessage, 800);
  }
});

startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");
  setTimeout(showNextMessage, 500);
});
