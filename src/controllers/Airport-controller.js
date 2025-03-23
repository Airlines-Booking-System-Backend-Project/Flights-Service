const { Airport_Service } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse, isPrismaError } = require('../utils')
const { prismaError } = require('prisma-better-errors')

const createAirport = async (req, res) => {
    const code = req.body.code
    const name = req.body.name
    const address = req.body.address
    const cityId = req.body.cityId
    try {
        const response = await Airport_Service.createAirport({ code, name, address, cityId })
        return res.status(StatusCodes.CREATED).json(SuccessResponse("Successfilly created an Airport", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occurred while creating an airport", error))
    }
}

const getAll = async (req, res) => {
    try {
        const response = await Airport_Service.getAllAirports()
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved all the airports", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(err.message, err)
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retreiving all the airports", error.message))
    }
}

const getAirport = async (req, res) => {
    try {
        const response = await Airport_Service.getAirport(req.params.code)
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Airport not found.", "Given code of airport is incorrect"))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved the airport", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retrieving the airport", error))
    }
}

const deleteAirport = async (req, res) => {
    try {
        const response = await Airport_Service.deleteAirport(req.params.code)
        if (!response.count) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Error occured while deleting the airport.", "The given airport is not found."))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully deleted the airport.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occured while deleting the airport.", error))
    }
}

const updateAirport = async (req, res) => {
    try {
        const response = await Airport_Service.updateAirport(req.params.code, { code: req.body.code, name: req.body.name, address: req.body.address, cityId: req.body.cityId })
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully Updated the airport.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed to update the airport.", error))
    }

}

module.exports = {
    createAirport,
    getAll,
    getAirport,
    deleteAirport,
    updateAirport
}