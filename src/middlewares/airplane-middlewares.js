const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils')

const validateModelNumber = (req, res, next) => {
    if (!req.body.modelNumber || typeof (req.body.modelNumber) != 'string') {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error while creating airplane", "Model Number is not defined properly"))
    }
    next();
}


const validateCapacity = (req, res, next) => {
    if (!req.body.capacity || typeof (req.body.capacity) != 'number') {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error while creating airplane", "Capacity is not defined properly"))
    }
    next();
}

module.exports = {
    validateModelNumber,
    validateCapacity
}