const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  name: { type: String, default: '', display:true},
  email: { type: String, default: '', display:true},
  phone: { type: String, default: '', display:true},
  message: { type: String, default: '', display:true},
  schema: { type: String, default: 'contact', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Contact extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Contact
