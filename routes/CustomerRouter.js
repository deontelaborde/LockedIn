const Router = require('express').Router()
const controller = require('../controllers/CustomerController')
const middleware = require('../middleware')



Router.get('/', controller.GetCustomers)

Router.post('/register', controller.RegisterCustomer)

Router.get('/:customer_id', controller.GetCustomerById)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.put('/:customer_id', controller.UpdateCustomer)
Router.delete('/:customer_id', controller.DeleteCustomer)

module.exports = Router
