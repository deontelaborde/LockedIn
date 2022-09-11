const Router = require('express').Router()
const controller = require('../controllers/CarController')

Router.get('/', controller.GetCars)
Router.get('/:car_id', controller.GetCarById)

module.exports = Router
