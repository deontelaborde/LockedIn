const { Business } = require('../models')

const GetBusinesses = async (req, res) => {
  try {
    const businesses = await Business.findAll({})
    res.send(businesses)
  } catch (error) {
    throw error
  }
}

const GetBusinessById = async (req, res) => {
  console.log(req.params)
  try {
    const business = await Business.findByPk(req.params.business_id, {
    })
    res.send(business)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinesses,
  GetBusinessById
}