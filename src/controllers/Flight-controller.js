const { Flight_Service } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse, isPrismaError } = require('../utils')
const { prismaError } = require('prisma-better-errors')

const createFlight = async (req, res) => {
    try {
        const response = await Flight_Service.createFlight(
            {
                flightNumber: req.body.flightNumber,
                departureAirportCode: req.body.departureAirportCode,
                arrivalAirportCode: req.body.arrivalAirportCode,
                boardingGate: req.body.boardingGate,
                departureTime: new Date(req.body.departureTime),
                arrivalTime: new Date(req.body.arrivalTime),
                totalSeats: req.body.totalSeats,
                price: req.body.price,
                airplaneModelNumber: req.body.airplaneModelNumber
            }
        )
        return res.status(StatusCodes.CREATED).json(SuccessResponse("Flight created Successfully.", response))
    } catch (error) {
        console.log(error.message)
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occurred while creating Flight", error))
    }
}

const getAllFlight = async (req, res) => {
    try {
        const response = await Flight_Service.getAllFlights()
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved all the Flights.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(err.message, err)
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retreiving all the Flights", error.message))
    }
}

const getFlight = async (req, res) => {
    try {
        const response = await Flight_Service.getFlight(parseInt(req.params.id))
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Flight not found.", "Given Flight ID is incorrect"))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved the Flight", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retrieving the Flight.", error))
    }
}

const deleteFlight = async (req, res) => {
    try {
        const response = await Flight_Service.deleteFlight(parseInt(req.params.id))
        if (!response.count) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Error occured while deleting the Flight.", "The given Flight is not found."))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully deleted the Flight.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occured while deleting the Flight.", error))
    }
}

const updateFlight = async (req, res) => {
    try {
        const response = await Flight_Service.updateFlight(parseInt(req.params.id), {
            flightNumber: req.body.flightNumber,
            departureAirportCode: req.body.departureAirportCode,
            arrivalAirportCode: req.body.arrivalAirportCode,
            boardingGate: req.body.boardingGate,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            totalSeats: req.body.totalSeats,
            price: req.body.price,
            airplaneModelNumber: req.body.airplaneModelNumber
        })
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully Updated the Flight.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed to update the Flight.", error))
    }
}

const filteredFlights = async (req, res) => {
    const filter = {}
    const orderBy = {}
    if (req.query.trips) {
        const trips = req.query.trips
        const [departureAirportCode, arrivalAirportCode] = trips.split('-')
        filter.departureAirportCode = departureAirportCode
        filter.arrivalAirportCode = arrivalAirportCode
    }
    if (req.query.price) {
        const price = req.query.price
        const [minPrice, maxPrice] = price.split('-')
        filter.price = {
            gte: parseInt(minPrice),
            lte: parseInt(maxPrice)
        }
    }
    if (req.query.date) {
        const departureDate = new Date(req.query.date);
        const startOfDay = new Date(departureDate.setUTCHours(0, 0, 0, 0));
        const endOfDay = new Date(startOfDay);
        endOfDay.setUTCHours(23, 59, 59, 999);
        filter.departureTime = {
            gte: startOfDay,
            lte: endOfDay
        };
    }
    if (req.query.seats) {
        filter.totalSeats = {
            gte: parseInt(req.query.seats),
        }
    }
    if (req.query.sort) {
        const field = req.query.sort
        const [param, sort] = field.split('_')
        orderBy[param] = sort
    }
    try {
        const response = await Flight_Service.getFilteredFlights(filter, orderBy)
        return res.status(StatusCodes.OK).json(SuccessResponse('Successfully retrieved the filtered flights.', response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed to retrive the filtered flights.", error))
    }
}

const updateSeats = async (req,res) => {
    try {
        const response = await Flight_Service.updateSeats({
            id: parseInt(req.params.id),
            seats: req.body.seats,
            dec: req.body.dec
        })
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully updated the seats.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed to update the seats.", error))
    }
}

module.exports = {
    createFlight,
    deleteFlight,
    updateFlight,
    getAllFlight,
    getFlight,
    filteredFlights,
    updateSeats
}