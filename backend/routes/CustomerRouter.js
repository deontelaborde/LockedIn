const Router = require('express').Router()
const controller = require('../controllers/CustomerController')
const middleware = require('../middleware')


Router.get(
  '/',

  controller.GetCustomers
)

Router.post('/add', controller.AddCustomer)


Router.put(
  '/:customer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateCustomer
)
Router.delete(
  '/:customer_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteCustomer
)
  

Router.get('/:customer_id', controller.GetCustomerById)
module.exports = Router
