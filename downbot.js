require("dotenv").config();
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token);

// Configurando o webhook
const url = process.env.WEBHOOK_URL; // URL pública onde seu aplicativo está hospedado
bot.setWebHook(`${url}/bot${token}`);

// Configurando o servidor Express
const app = express();

// Rota para receber atualizações do webhook
app.post(`/bot${token}`, express.json(), (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Rota de teste para verificar se o servidor está funcionando
app.get("/", (req, res) => {
  res.send("Bot is running!");
});

// Lógica do bot
const welcome = "Bem Vindo! Eu sou o DownBot, como posso ajudar?";
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text.toString().toLowerCase();

  try {
    if (messageText === "/start" || messageText.includes("oi")) {
      bot.sendMessage(chatId, welcome);
    }
  } catch (error) {
    console.error("Erro ao processar a mensagem:", error.message);
    bot.sendMessage(
      chatId,
      "Desculpe, ocorreu um erro ao processar sua solicitação. Tente novamente mais tarde."
    );
  }
});

// Iniciando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
