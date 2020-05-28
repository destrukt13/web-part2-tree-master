const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  planet: { type: Schema.Types.ObjectId, ref: 'Planet', required: true },
  load: { type: Schema.Types.ObjectId, ref: 'Load', required: true }
})

module.exports = mongoose.model('DeliveredOnPlanet', locationSchema)
