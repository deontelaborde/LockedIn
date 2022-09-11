const Router = require('express').Router()
const controller = require('../controllers/CustomerController')


Router.get('/', controller.GetCustomers)

Router.get('/:customer_id', controller.GetCustomerById)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.delete('/:customer_id', controller.DeleteCustomer)

module.exports = Router
