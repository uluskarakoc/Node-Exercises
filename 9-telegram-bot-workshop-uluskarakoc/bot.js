import TelegramBot from "node-telegram-bot-api";
const bot = new TelegramBot("6132012207:AAEP2FvuHZGBZXRrsCsqCNffffWYzckNZAk", {
  polling: true,
});
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const API_KEY = "6e0951084d0113cc7b8e84761629a5e2";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${msg.text}&appid=${API_KEY}&units=metric`;
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    if(data.main){
        const temp = data.main.temp;
        bot.sendMessage(chatId, temp);
    }
  };

  fetchData();
});
