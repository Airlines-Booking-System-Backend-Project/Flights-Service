const { InfoController } = require('../../controllers/index')
const airplane = require('./airplanes')
const city = require('./city')
const airport = require('./airport')
const flight = require('./flight')
const express = require('express')
const router = express.Router()


router.use('/airplanes', airplane)
router.use('/city', city)
router.use('/airport', airport)
router.use('/flight', flight)
router.get('/info', InfoController.info)

module.exports = router