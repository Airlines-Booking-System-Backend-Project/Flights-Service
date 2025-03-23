const { AirportMiddleware } = require('../../../middlewares')
const { AirportController } = require('../../../controllers')
const express = require('express')
const router = express.Router()

router
    .get('/', AirportController.getAll)
    .get('/:code', AirportController.getAirport)
    .post('/', AirportMiddleware.validateInputs, AirportController.createAirport)
    .delete('/:code', AirportController.deleteAirport)
    .patch('/:code', AirportController.updateAirport)



module.exports = router