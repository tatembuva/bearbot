const Position = require('../data/models/position')
const Trade = require('../data/models/trade')
class Strategy {
    constructor({onBuySignal, onSellSignal}) {
        this.onBuySignal = onBuySignal
        this.onSellSignal = onSellSignal
        this.positions = {}
    }

    async run({candles, time}) {
    }

    openPositions() {
        return Object.keys(this.positions).map(x => {
            return this.positions[x]
        }).filter(p => p.state === 'open')
    }

    async positionOpen({price, size, time, id}) {
        const trade = new Trade({price, time, size})
        const position = new Position({trade, id})
        this.positions[id] = position
    }
    async positionClose({price, size, time, id}) {
        const trade = new Trade({price, time, size})
        const pos = this.positions[id]
        if (pos) {
            pos.close({trade})
        }
    }
}

module.exports = Strategy;
