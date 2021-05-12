const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  },
  dateCompleted: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
