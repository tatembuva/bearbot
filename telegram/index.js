const {Telegraf} = require('telegraf');

let tradeBot;
let chatBot;

const startChatBot = (bot) => {
  console.log("🤖 Telegram client initializing...");

  tradeBot = bot;
  chatBot = new Telegraf(process.env.TELEGRAM_TOKEN)
}
module.exports = {
  start: startChatBot,
}
