const { Customer, Car } = require('../models')

const GetCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll({
      include: [{ model: Car }]
    })
    res.send(customers)
  } catch (error) {
    throw error
  }
}
const GetCustomerById = async (req, res) => {
  console.log(req.params)
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [{ model: Car }]
    })
    res.send(customer)
  } catch (error) {
    throw error
  }
}


module.exports = {
  GetCustomers,
  GetCustomerById
}
