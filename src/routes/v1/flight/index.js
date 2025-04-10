const { FlightMiddleware } = require('../../../middlewares')
const { FlightController } = require('../../../controllers')
const express = require('express')
const router = express.Router()

router
    .get('/', FlightController.getAllFlight)
    .get('/search', FlightController.filteredFlights)
    .get('/:id', FlightMiddleware.isValidId, FlightController.getFlight)
    .post('/', FlightMiddleware.validateInputs, FlightMiddleware.isValidDate, FlightController.createFlight)
    .patch('/:id/seats', FlightMiddleware.isValidId, FlightMiddleware.validateInputForSeats, FlightController.updateSeats)
    .patch('/:id', FlightMiddleware.isValidId, FlightController.updateFlight)
    .delete('/:id', FlightMiddleware.isValidId, FlightController.deleteFlight)


module.exports = router