const { StatusCodes } = require('http-status-codes');
const validateInput = require('./input-middleware');
const { ErrorResponse } = require('../utils');

const constraints = [
    { params: 'flightNumber', dataType: 'string' },
    { params: 'boardingGate', dataType: 'string' },
    { params: 'departureAirportCode', dataType: 'string' },
    { params: 'arrivalAirportCode', dataType: 'string' },
    { params: 'departureTime', dataType: 'string' },
    { params: 'arrivalTime', dataType: 'string' },
    { params: 'totalSeats', dataType: 'number' },
    { params: 'price', dataType: 'number' },
    { params: 'airplaneModelNumber', dataType: 'number' }
]

const isValidDate = (req, res, next) => {
    const validDepartureTime = Date.parse(req.body.departureTime)
    const validArrivalTime = Date.parse(req.body.arrivalTime)
    if (isNaN(validDepartureTime)) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error in Departure Time Input.", "Provided with incorrect format."))
    }
    if (isNaN(validArrivalTime)) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Error in Arrival Time Input.", "Provided with incorrect format."))
    }
    const departureTime = new Date(req.body.departureTime)
    const arrivalTime = new Date(req.body.arrivalTime)
    if (departureTime.getTime() > arrivalTime.getTime()) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse("Time is not defined properly.", "Departure time is later than the arrival time."))
    }
    next()
}

const isValidId = (req, res, next) => {
    const id = parseInt(req.params.id)
    if (isNaN(id)) {
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse('id is not provided properly.', 'id provided should be a number.'))
    }
    next()
}


module.exports = {
    validateInputs: validateInput(constraints),
    isValidDate,
    isValidId
}