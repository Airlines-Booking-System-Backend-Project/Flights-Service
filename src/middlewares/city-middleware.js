const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils')

const validateName = (req,res,next) => {
    if (!req.body.name || typeof req.body.name != 'string'){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error while creating city.", "City name is not defined properly"))
    }
    next();
}

const validateState = (req,res,next) => {
    if (!req.body.state || typeof req.body.state != 'string'){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error while creating city.", "State is not defined properly"))
    }
    next();
}

const validateCountry = (req,res,next) => {
    if (!req.body.country || typeof req.body.country != 'string'){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error while creating city.", "Country is not defined properly"))
    }
    next();
}

module.exports = {
    validateCountry,
    validateName,
    validateState
}