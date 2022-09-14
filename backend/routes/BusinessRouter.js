const Router = require('express').Router()
const controller = require('../controllers/BusinessController')
const middleware = require('../middleware')

Router.get('/', controller.GetBusinesses)

Router.post('/register', controller.RegisterBusiness)
Router.post('/login', controller.LoginBusiness)


Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession)
  
Router.get('/:business_id', controller.GetBusinessById)
Router.put(
  '/:business_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateBusiness
)
Router.delete(
  '/:business_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteBusiness
)

module.exports = Router
