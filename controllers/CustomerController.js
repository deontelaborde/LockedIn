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
    const customer = await Customer.findByPk(req.params.customer_id, {
      include: [{ model: Car }]
    })
    res.send(customer)
  } catch (error) {
    throw error
  }
}
const UpdateCustomer = async (req, res) => {
  try {
    let customerId = parseInt(req.params.customer_id)
    let updatedCustomer = await Customer.update(req.body, {
      where: { id: customerId },
      returning: true
    })
    res.send(updatedCustomer)
  } catch (error) {
    throw error
  }
}
const DeleteCustomer = async (req, res) => {
  try {
    
    let customerId = parseInt(req.params.customer_id)
    await Customer.destroy({ where: { id: customerId } })
    res.send({ message: `Deleted user with an id of ${customerId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCustomers,
  GetCustomerById,
  UpdateCustomer,
  DeleteCustomer
}
