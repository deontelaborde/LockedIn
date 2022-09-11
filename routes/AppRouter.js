const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')

Router.use('/customers', CustomerRouter)

module.exports = Router
