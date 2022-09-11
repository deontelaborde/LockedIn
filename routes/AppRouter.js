const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const BusinessRouter = require('./BusinessRouter')


Router.use('/customers', CustomerRouter)
Router.use('/businesses', BusinessRouter)

module.exports = Router
