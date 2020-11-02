const moment = require('moment')
class CandleStick {
    constructor({
        openTime, open, high, low, close, volume, closeTime, quoteVolume,
        trades, baseAssetVolume, quoteAssetVolume}) {

        this.openTime = moment(openTime, 'x').format('lll')
        this.closeTime = moment(closeTime, 'x').format('lll')
        this.unixTimeStamps = {
            open: openTime,
            close: closeTime
        }

        this.open = open
        this.high = high
        this.low = low
        this.close = close
        this.volume = volume

        this.trades = trades
        this.baseAssetVolume = baseAssetVolume
        this.quoteVolume = quoteVolume
        this.quoteAssetVolume = quoteAssetVolume
    }
}

module.exports = CandleStick;
