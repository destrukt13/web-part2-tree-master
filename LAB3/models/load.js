const mongoose = require('mongoose')

const Schema = mongoose.Schema

const locationSchema = new Schema({
  code: { type: String, required: true, unique: true, max: 6 },
  name: { type: String, required: true, unique: true, max: 50 },
  weight: { type: Number, required: true, unique: true, max: 50 }
})

module.exports = mongoose.model('Load', locationSchema)
