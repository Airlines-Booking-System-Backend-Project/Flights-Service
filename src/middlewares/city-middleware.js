const validateInput = require('./input-middleware')
const { StatusCodes } = require('http-status-codes')
const { ErrorResponse } = require('../utils')

const constraints = [
    { params: 'name', dataType: 'string' },
    { params: 'state', dataType: 'string' },
    { params: 'country', dataType: 'string' },
]

const isValidId = (req, res, next) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse('id is not provided properly.', 'id provided should be a number.'))
    }
    next()
}


module.exports = {
    validateInputs: validateInput(constraints),
    isValidId
}