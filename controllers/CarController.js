const { Car } = require('../models')

const GetCars = async (req, res) => {
  try {
    const cars = await Car.findAll({})
    res.send(cars)
  } catch (error) {
    throw error
  }
}
const GetCarById = async (req, res) => {
  console.log(req.params)
  try {
    const car = await Car.findByPk(req.params.car_id, {
    })
    res.send(car)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetCars,
  GetCarById
}