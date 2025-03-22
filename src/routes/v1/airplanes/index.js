const { AirplaneController } = require('../../../controllers')
const { AirplaneMiddleware } = require('../../../middlewares')
const express = require('express')
const router = express.Router()


router
.get('/', AirplaneController.getAll)
.get('/:modelNumber', AirplaneController.getAirplane)
.post('/', AirplaneMiddleware.validateModelName, AirplaneMiddleware.validateCapacity, AirplaneController.createAirplane)
.delete('/:modelNumber', AirplaneController.deleteAirplane)
.patch('/:modelNumber', AirplaneController.updateAirplane)



module.exports = router