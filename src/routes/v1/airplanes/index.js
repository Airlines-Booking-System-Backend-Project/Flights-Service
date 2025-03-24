const { AirplaneController } = require('../../../controllers')
const { AirplaneMiddleware } = require('../../../middlewares')
const express = require('express')
const router = express.Router()


router
    .get('/', AirplaneController.getAll)
    .get('/:modelNumber', AirplaneMiddleware.isValidModelNumber, AirplaneController.getAirplane)
    .post('/', AirplaneMiddleware.validateInputs, AirplaneController.createAirplane)
    .delete('/:modelNumber', AirplaneMiddleware.isValidModelNumber, AirplaneController.deleteAirplane)
    .patch('/:modelNumber', AirplaneMiddleware.isValidModelNumber, AirplaneController.updateAirplane)



module.exports = router