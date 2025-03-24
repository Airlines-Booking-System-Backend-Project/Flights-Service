const { StatusCodes } = require('http-status-codes')
const validateInput = require('./input-middleware')
const { ErrorResponse } = require('../utils')

const constraints = [
    { params: 'modelName', dataType: 'string' },
    { params: 'capacity', dataType: 'number' }
]


const isValidModelNumber = (req, res, next) => {
    const id = parseInt(req.params.modelNumber)
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse('modelNumber is not provided properly.', 'modelNumber provided should be a number.'))
    }
    next()
}

module.exports = {
    validateInputs: validateInput(constraints),
    isValidModelNumber
}