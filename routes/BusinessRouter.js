const Router = require('express').Router()
const controller = require('../controllers/BusinessController')

Router.post('/register', controller.RegisterBusiness)

Router.get('/', controller.GetBusinesses)
Router.get('/:business_id', controller.GetBusinessById)
Router.put('/:business_id', controller.UpdateBusiness)
Router.delete('/:business_id', controller.DeleteBusiness)

module.exports = Router
