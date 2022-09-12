const Router = require('express').Router()
const controller = require('../controllers/BusinessController')


Router.get('/', controller.GetBusinesses)
Router.put('/:business_id', controller.UpdateBusiness)
Router.delete('/:business_id', controller.DeleteBusiness)

module.exports = Router