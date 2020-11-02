const Binance = require('binance-api-node').default;
const CandleStick = require('../models/candlestick')

class HistoricalService {
    constructor({start, end, interval, limit, symbol}) {
        this.start = start
        this.end = end
        this.interval = interval
        this.limit = limit
        this.symbol = symbol

        //Binance-Api Client
        this.client = Binance();
    }

    async getApiData() {
        const data = await this.client.candles({symbol: this.symbol, limit: this.limit})
        const candles = data.map(x => {return new CandleStick(x)})
        return candles;
    }
    // getCSVData
    // getJsonData
    // createRequest - for more than 1000 candles at a time
}

module.exports = HistoricalService;
