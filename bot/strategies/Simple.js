const Strategy = require('./strategy')

class SimpleStrategy extends Strategy {
    async run({candles, time}) {
        const len = candles.length
        if (len < 10) {return }

        const openPos = this.openPositions()

        const penu = candles[len - 2].close
        const last = candles[len - 1].close
        const price = last.close

        if (openPos == 0) {
            if (last < penu) {
                this.onBuySignal({price, time})
            }
        } else {
            if (last > penu) {
                openPos.forEach(p => this.onSellSignal({price, size: p.enter.size, time, pos: p}))
            }
        }
    }
}

module.exports = SimpleStrategy;
