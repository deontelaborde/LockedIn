const Router = require('express').Router()
const CustomerRouter = require('./CustomerRouter')
const BusinessRouter = require('./BusinessRouter')
const CarRouter = require('./CarRouter')
const AppointmentRouter = require('./AppointmentRouter')


Router.use('/customers', CustomerRouter)
Router.use('/businesses', BusinessRouter)
Router.use('/cars', CarRouter)
Router.use('/appointments', AppointmentRouter)


module.exports = Router
