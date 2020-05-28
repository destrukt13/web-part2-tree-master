const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  planet: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
  type: { type: Schema.Types.ObjectId, ref: 'LocationType', required: true }
})

module.exports = mongoose.model('Location', locationSchema)
