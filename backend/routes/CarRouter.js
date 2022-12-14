const Router = require('express').Router()
const controller = require('../controllers/CarController')

Router.get('/', controller.GetCars)
Router.get('/:car_id', controller.GetCarById)
Router.put('/:car_id', controller.UpdateCar)
Router.delete('/:car_id', controller.DeleteCar)
Router.post('/:customer_id', controller.CreateCar)

module.exports = Router
