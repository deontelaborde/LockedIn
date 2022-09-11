const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const BusinessRouter = require('./BusinessRouter')
const CarRouter = require('./CarRouter')


Router.use('/customers', CustomerRouter)
Router.use('/businesses', BusinessRouter)
Router.use('/cars', CarRouter)


module.exports = Router
