const { City_Service } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse, isPrismaError } = require('../utils')
const { prismaError } = require('prisma-better-errors')

const createCity = async (req, res) => {
    try {
        const response = await City_Service.createCity({ name: req.body.name, state: req.body.state, country: req.body.country })
        return res.status(StatusCodes.CREATED).json(SuccessResponse("City created Successfully.", response))
    } catch (error) {
        console.log(error.message)
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occurred while creating city", error))
    }
}

const getAllCity = async (req, res) => {
    try {
        const response = await City_Service.getAllCity()
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved all the cities.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(err.message, err)
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retreiving all the cities", error.message))
    }
}

const getCity = async (req, res) => {
    try {
        const response = await City_Service.getCity(parseInt(req.params.id))
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("City not found.", "Given City ID is incorrect"))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved the City", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retrieving the city.", error))
    }
}

const deleteCity = async (req, res) => {
    try {
        const response = await City_Service.deleteCity(parseInt(req.params.id))
        if (!response.count) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Error occured while deleting the city.", "The given city is not found."))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully deleted the airplane.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occured while deleting the city.", error))
    }
}

const updateCity = async (req, res) => {
    try {
        const response = await City_Service.updateCity(parseInt(req.params.id), { name: req.body.name, state: req.body.state, country: req.body.country })
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully Updated the airplane.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed to update the airplane.", error))
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity,
    getAllCity,
    getCity
}