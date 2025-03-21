const { InfoController } = require('../../controllers/index')
const airplane = require('./airplanes')
const express = require('express')
const router = express.Router()


router.use('/airplanes', airplane)
router.get('/info', InfoController.info)

module.exports = router