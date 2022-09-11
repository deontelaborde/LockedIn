const { Car } = require('../models')

const GetCars = async (req, res) => {
  try {
    const cars = await Car.findAll({})
    res.send(cars)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCars
}