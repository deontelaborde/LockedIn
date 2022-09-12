const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:appointment_id', controller.GetAppointmentById)
Router.put('/:appointment_id', controller.UpdateAppointment)


module.exports = Router