const Router = require('express').Router()
const controller = require('../controllers/CarController')

Router.get('/', controller.GetCars)

module.exports = Router
