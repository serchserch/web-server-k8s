'use strict'

const mongoose = require('mongoose')

/**
 *
 * @property {String} name - Pet name
 * @property {String} status - Status
 * @property {Date} createdAt - Creation date (default Date.now)
 * @property {Date} updatedAt - Last update date
 * @property {Date} removedAt - Remove date
 */
let schema = new mongoose.Schema({
  name: String,
  status: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  removedAt: {
    type: Date
  }
}, {
  strict: true
})

module.exports = mongoose.model('Pet', schema)
