const { Business } = require('../models')
const middleware = require('../middleware')

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

const UpdateBusiness = async (req, res) => {
  try {
    let businessId = parseInt(req.params.business_id)
    let updatedBusiness = await Business.update(req.body, {
      where: { id: businessId },
      returning: true
    })
    res.send(updatedBusiness)
  } catch (error) {
    throw error
  }
}
const DeleteBusiness = async (req, res) => {
  try {
    
    let businessId = parseInt(req.params.business_id)
    await Business.destroy({ where: { id: businessId } })
    res.send({ message: `Deleted user with an id of ${businessId}` })
  } catch (error) {
    throw error
  }
}
const RegisterBusiness = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      address,
      city,
      stateProvince,
      country,
      postalCode
    } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const business = await Business.create({
      name,
      email,
      passwordDigest,
      phoneNumber,
      address,
      city,
      stateProvince,
      country,
      postalCode
    })
    res.send(business)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetBusinesses,
  GetBusinessById,
  UpdateBusiness,
  DeleteBusiness,
  RegisterBusiness
}