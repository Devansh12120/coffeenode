const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  name: { type: String, default: '', display:true},
  email: { type: String, default: '', display:true},
  phone: { type: String, default: '', display:true},
  people: { type: Number, default: 1, display:true},
  time: { type: String, default: '', display:true},
  order: { type: String, default: '', display:true},
  schema: { type: String, default: '', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Order extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Order
