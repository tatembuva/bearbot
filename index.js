require("dotenv").config();
const Binance = require("binance-api-node").default;
const client = Binance();
const bot = require("./bot");
const telegram = require("./telegram");

bot.start(client);
// telegram.start(bot);
