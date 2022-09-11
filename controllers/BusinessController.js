const { Business } = require('../models')

const GetBusinesses = async (req, res) => {
  try {
    const businesses = await Business.findAll({})
    res.send(businesses)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinesses
}