document.getElementById("startChatButton").addEventListener("click", function() {
  // Скрыть кнопку и показать окно чата
  document.getElementById("intro").style.display = "none";
  document.getElementById("chatWindow").style.display = "block";

  // Заполнить окно чата заготовленными сообщениями
  const chatContent = document.getElementById("chatContent");

  // Диалог
  const dialog = [
    "Привет, как у вас дела?",
    "У меня отлично, а у вас как?",
    "У меня тоже все отлично!",
    "Мы тут немного волнуемся.",
    "Здесь как-то странно вы это чувствуете?",
    "Да, тут действительно что-то не так.",
    "Вы тоже это чувствуете?",
    "Может, просто карнавал такой странный?",
    "Нет, я думаю, это не просто так.",
    "Что я имею в виду, позже объясню, пока просто наблюдаю."
  ];

  // Добавление сообщений в чат
  dialog.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg;
    chatContent.appendChild(div);
  });
});

// Отправка сообщения
document.getElementById("sendMessageButton").addEventListener("click", function() {
  const userMessage = document.getElementById("userMessage").value;
  if (userMessage.trim() !== "") {
    const div = document.createElement("div");
    div.textContent = "Вы: " + userMessage;
    document.getElementById("chatContent").appendChild(div);

    // Очистить поле ввода
    document.getElementById("userMessage").value = "";
  }
});
