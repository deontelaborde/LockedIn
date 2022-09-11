const Router = require('express').Router()
const controller = require('../controllers/BusinessController')


Router.get('/', controller.GetBusinesses)
Router.get('/:business_id', controller.GetBusinessById)
Router.put('/:business_id', controller.UpdateBusiness)

module.exports = Router
