// require the express and mongoose libraries
const express = require('express')
const passport = require('passport')
// create a router so our code is more modular
const router = express.Router()
const requireToken = passport.authenticate('bearer', { session: false })

const Product = require('./../models/product')
// Require the handle404 method
const customErrors = require('./../../lib/custom_errors')
const handle404 = customErrors.handle404
const BadCredentialsError = customErrors.BadCredentialsError

// CREATE /products
router.post('/products', requireToken, (req, res, next) => {
  if (!req.user.isAdmin) {
    throw new BadCredentialsError()
  }

  const productData = req.body.product
  Product.create(productData)
    // respond with the product we created and set the status to 201: Created
    .then(product => { res.status(201).json({ product }) })
    .catch(next)
})

// INDEX /products
router.get('/products', (req, res, next) => {
  Product.find()
    .then(handle404)
    .then(products => res.status(200).json({ products }))
    .catch(next)
})

// SHOW /product/:id
router.get('/products/:id', (req, res, next) => {
  const id = req.params.id
  Product.findById(id)
    .then(handle404)
    .then(product => { res.status(200).json({ product }) })
    .catch(next)
})

// export the router to be required and mounted in server.js
module.exports = router
