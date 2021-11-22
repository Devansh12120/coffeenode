const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Save = require('../models/Save')

class SaveController extends Controller {
  constructor () {
    super(Save, process.env)
  }

  async get (params) {
    const saves = await Save.find(params, Controller.parseFilters(params))
    return Save.convertToJson(saves)
  }

  async getById (id) {
    const save = await Save.findById(id)
    if (save == null) {
      throw new Error(`${Save.resourceName} ${id} not found.`)
    }

    return save.summary()
  }

  async post (body) {
    const save = await Save.create(body)
    return save.summary()
  }

  async put (id, params) {
    const save = await Save.findByIdAndUpdate(id, params, { new: true })
    return save.summary()
  }

  async delete (id) {
    const save = await Save.findByIdAndRemove(id)
    return save
  }
}

module.exports = new SaveController()

