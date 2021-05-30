// const mongoose = require('mongoose')
//
// const orderSchema = new mongoose.Schema({
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true
//   },
//   total: {
//     type: Number,
//     required: true
//   },
//   shipping: {
//     type: String
//   },
//   dateOrdered: {
//     type: Date
//   }
// }, { // Object for options, 'meta' information
//   // Automatically adds `created_at` and `updated_at` fields onto the data
//   timestamps: true,
//   // So `res.json()` and other `JSON.stringify()` functions include virtuals
//   toJSON: { virtuals: true },
//   // So `toObject()` output includes virtuals
//   toObject: { virtuals: true }
// })
//
// orderSchema.virtual('subtotal').get(() => {
// })
//
// const shippingPrice = (type) => {
//   if (type === 'express') {
//     return 5
//   }
//   if (type === 'standard') {
//     return 3
//   }
//   if (type === 'pickup') { return 0 }
// }
//
// orderSchema.virtual('total').get(function () {
//   return this.subtotal + shippingPrice(this.shipping)
// })
//
// // use defined schema to create object constructor function
// // const Order = mongoose.model('Order', orderSchema)
//
// module.exports = mongoose.model('Order', orderSchema)

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
  deliveryType: {
    type: String,
    required: true
  },
  dateOrdered: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
