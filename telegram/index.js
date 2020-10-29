const {Telegraf, Extra} = require('telegraf');


let tradeBot;
let chatBot;

const chatBotRouter = (bot) => {
  //start - greeting when a new chat session is started
  bot.start(ctx => {
    ctx.replyWithMarkdown(
      `*Welcome to BearBot* 🐻
_version 0.0.1_ \n
Run, manage and backtest cryptocurrency trading algorithms on the [Binance Exchange](https://www.binance.com/en) leveraging the power of [Backtrader](https://www.backtrader.com/) and [TALib](https://mrjbq7.github.io/ta-lib/doc_index.html) \n
_You are currently logged out ‼️ _\n
👤 *Please enter your username :*`, Extra.webPreview(false));
  });
}

const startChatBot = (bot) => {
  console.log("🤖 Telegram client initializing...");

  tradeBot = bot;
  chatBot = new Telegraf(process.env.TELEGRAM_TOKEN)
  chatBotRouter(chatBot);
  chatBot.launch();
}
module.exports = {
  start: startChatBot,
}
