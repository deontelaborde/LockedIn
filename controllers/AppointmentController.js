const { Appointment } = require('../models')

const GetAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({})
    res.send(appointments)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAppointments
}
