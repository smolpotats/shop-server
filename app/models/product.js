// 'use strict'
// // require mongoose library
// const mongoose = require('mongoose')
//
// const productSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     min: 0,
//     required: true
//   },
//   handle: {
//     type: String
//   }
// }, { // create data to include when creating an object
//   toObject: { virtuals: true },
//   toJSON: { virtuals: true }
// })
//
// module.exports = mongoose.model('Product', productSchema)

'use strict'
// require mongoose library
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  image: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { // create data to include when creating an object
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

module.exports = mongoose.model('Product', productSchema)
