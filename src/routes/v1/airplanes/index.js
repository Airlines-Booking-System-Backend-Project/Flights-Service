const { AirplaneController } = require('../../../controllers')
const { AirplaneMiddleware } = require('../../../middlewares')
const express = require('express')
const router = express.Router()


router.post('/create',AirplaneMiddleware.validateModelNumber,AirplaneMiddleware.validateCapacity,  AirplaneController.createAirplane)

module.exports = router