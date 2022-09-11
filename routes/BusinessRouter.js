const Router = require('express').Router()
const controller = require('../controllers/BusinessController')


Router.get('/', controller.GetBusinesses)

module.exports = Router
