const express = require('express')
const passport = require('passport')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
// const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

const Order = require('../models/order')
const Product = require('../models/product')

// INDEX
// GET /orders
router.get('/orders', requireToken, (req, res, next) => {
  // const user = req.user
  // console.log('req:', req)
  Order.find()
    .then(orders => {
      // `orders` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return orders.map(order => order.toObject())
    })
    // respond with status 200 and JSON of the orders
    .then(orders => res.status(200).json({ orders: orders }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE - when the user clicks the 'purchase' button on /product/:id page
// POST /orders
router.post('/orders', requireToken, (req, res, next) => {
  /* REQUEST DATA: order: { product: 'product._id' } */
  const order = req.body.order
  order.owner = req.user.id

  Product.findById(order.product)
    .then(handle404)
    .then(product => {
      order.total = product.price
      Order.create(order)
        .then(order => {
          res.status(201).json({ order: order })
        })
        .catch(next)
    })
    .catch(next)
})

// CANCEL - when the user clicks 'delete order' on /orders page
// DELETE /orders/:id
router.delete('/orders/:id', requireToken, (req, res, next) => {
  const order = req.params.id
  Order.findById(order)
    .then(handle404)
    .then(order => {
      // throw an error if current user doesn't own `order`
      requireOwnership(req, order)
      // delete the order ONLY IF the above didn't throw
      order.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

/* // SHOW
// GET /orders/:id
router.get('/orders/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Order.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "order" JSON
    .then(order => res.status(200).json({ order: order.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
}) */

/* // UPDATE
// PATCH /orders/5a7db6c74d55bc51bdf39793
router.patch('/orders/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.order.owner

  Order.findById(req.params.id)
    .then(handle404)
    .then(order => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, order)

      // pass the result of Mongoose's `.update` to the next `.then`
      return order.updateOne(req.body.order)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
  }) */

module.exports = router
