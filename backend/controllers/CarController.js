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
const UpdateCar = async (req, res) => {
  try {
    let carId = parseInt(req.params.car_id)
    let updatedCar = await Car.update(req.body, {
      where: { id: carId },
      returning: true
    })
    res.send(updatedCar)
  } catch (error) {
    throw error
  }
}
const DeleteCar = async (req, res) => {
  try {
    
    let carId = parseInt(req.params.car_id)
    await Car.destroy({ where: { id: carId } })
    res.send({ message: `Deleted user with an id of ${carId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCars,
  GetCarById,
  UpdateCar,
  DeleteCar
}