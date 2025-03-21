const { Airplane_Service } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse } = require('../utils')

const createAirplane = async (req, res) => {
    const modelNumber = req.body.modelNumber
    const capacity = req.body.capacity
    try {
        const response = await Airplane_Service.createAirplane({ modelNumber, capacity })
        return res.status(StatusCodes.CREATED).json(SuccessResponse("Successfilly created an Airplane", response))
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occurred while creating an airplane", error.message))
    }
}

module.exports = { createAirplane }