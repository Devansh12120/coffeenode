const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  email: { type: String, default: '',display:true, immutable: true },
  schema: { type: String, default: 'save', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Save extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Save
