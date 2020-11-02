const HistoricalService = require('../data/historical')
const CandleStick = require('../data/models/candlestick')
const {Simple} = require('../strategies')
const rs = require('randomstring')
class Backtester {
  constructor({start, end, interval, limit, symbol}) {
    this.startTime = start
    this.endTime = end
    this.interval = interval
    this.limit = limit
    this.symbol = symbol
    this.histDataService = new HistoricalService({symbol: 'ETHBTC', limit: this.limit})
  }

  async start() {
    try {
      const history = await this.histDataService.getApiData()
      this.strategy = new Simple({
        onBuySignal: (x) => this.onBuySignal(x),
        onSellSignal: (x) => this.onSellSignal(x)
      })
      Promise.all(history.map((x, index) => {
        const candles = history.slice(0, index + 1)
        return this.strategy.run({
          candles, time: x.unixTimeStamps.open
        })
      }))
    } catch (err) {
      console.log('Error : ' + err)
    }
  }

  onBuySignal({price, time}) {
    console.log('Buy Signal')
    let id = rs.generate(10)
    this.strategy.positionOpen({
      price, size: 1.0, time, id
    })
  }
  onSellSignal({price, size, time, pos}) {
    console.log('Sell Signal')
    this.strategy.positionClose({
      price, size, time, id: pos.id
    })
  }

}

module.exports = Backtester;
