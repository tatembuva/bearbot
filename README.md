# BearBot 🐻
A simple trading bot, hand-built with 💖...

### Plan

The trading bot is primarily a node.js application _(considering porting to golang in the future)_.The main node app will handle the user interfaces, :

- Telegram Chatbot
  - All main function of the bot will be avaliable from the chat ui
  - Bot should be able to return rich content :
    - pdfs or images of charts that can be dynamically generated
    - report pdfs e.g Portfolio Metrics (Pyfolio)
  - Manual orders
  - Backtesting , Paper trading and Live trading
- Restful API
  - Streaming of symbol or strategy data, for display on live charts 
  - Portfolio management 
  - Addition of new strategies
  - Manual orders
  - Backtesting , Paper trading and Live trading
- Terminal UI

... webscraping, :

- CoinMarketCap
- Fear & Greed Index
- Twitter Sentiment Analysis ( for given accounts )
- Reddit / Discord

... running trading processes and managing them, 
