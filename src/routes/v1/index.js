const { InfoController } = require('../../controllers/index')
const airplane = require('./airplanes')
const city = require('./city')
const express = require('express')
const router = express.Router()


router.use('/airplanes', airplane)
router.use('/city', city)
router.get('/info', InfoController.info)

module.exports = router