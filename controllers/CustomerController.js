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

module.exports = {
  GetCustomers
}
