const { Appointment } = require('../models')

const GetAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({})
    res.send(appointments)
  } catch (error) {
    throw error
  }
}

const GetAppointmentById = async (req, res) => {
  console.log(req.params)
  try {
    const appointment = await Appointment.findByPk(req.params.appointment_id, {
    })
    res.send(appointment)
  } catch (error) {
    throw error
  }
}


const UpdateAppointment= async (req, res) => {
  try {
    let appointmentId = parseInt(req.params.appointment_id)
    let updatedAppointment = await Appointment.update(req.body, {
      where: { id: appointmentId },
      returning: true
    })
    res.send(updatedAppointment)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAppointments,
  GetAppointmentById,
  UpdateAppointment
}
