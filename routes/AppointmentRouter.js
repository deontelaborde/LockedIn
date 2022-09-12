const Router = require('express').Router()
const controller = require('../controllers/AppointmentController')

Router.get('/', controller.GetAppointments)
Router.get('/:appointment_id', controller.GetAppointmentById)


module.exports = Router