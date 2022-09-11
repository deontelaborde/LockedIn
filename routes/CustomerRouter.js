const Router = require('express').Router()
const controller = require('../controllers/CustomerController')


Router.get('/', controller.GetCustomers)
Router.get('/:id', controller.GetCustomerById)

module.exports = Router
