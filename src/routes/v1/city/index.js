const { CityMiddleware } = require('../../../middlewares')
const { CityController } = require('../../../controllers')
const express = require('express')
const router = express.Router()

router
    .get('/', CityController.getAllCity)
    .get('/:id', CityMiddleware.isValidId, CityController.getCity)
    .post('/', CityMiddleware.validateInputs, CityController.createCity)
    .patch('/:id', CityMiddleware.isValidId, CityController.updateCity)
    .delete('/:id', CityMiddleware.isValidId, CityController.deleteCity)

module.exports = router