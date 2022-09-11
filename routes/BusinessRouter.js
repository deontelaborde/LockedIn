const Router = require('express').Router()
const controller = require('../controllers/BusinessController')


Router.get('/', controller.GetBusinesses)
Router.get('/:business_id', controller.GetBusinessById)

module.exports = Router
