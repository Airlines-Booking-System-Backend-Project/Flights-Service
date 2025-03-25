const { Airplane_Service } = require('../services')
const { StatusCodes } = require('http-status-codes')
const { SuccessResponse, ErrorResponse, isPrismaError } = require('../utils')
const { prismaError } = require('prisma-better-errors')

const createAirplane = async (req, res) => {
    const modelName = req.body.modelName
    const capacity = req.body.capacity
    try {
        const response = await Airplane_Service.createAirplane({ modelName, capacity })
        return res.status(StatusCodes.CREATED).json(SuccessResponse("Successfilly created an Airplane", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occurred while creating an airplane", error))
    }
}

const getAll = async (req, res) => {
    try {
        const response = await Airplane_Service.getAllAirplanes()
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved all the airplanes", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(err.message, err)
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retreiving all the airplanes", error.message))
    }
}

const getAirplane = async (req, res) => {
    try {
        const response = await Airplane_Service.getAirplane(parseInt(req.params.modelNumber))
        if (!response) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Airplane not found.", "Given Model Number is incorrect"))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully retrieved the airplane", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Failed retrieving the airplane", error))
    }
}

const deleteAirplane = async (req, res) => {
    try {
        const response = await Airplane_Service.deleteAirplane(parseInt(req.params.modelNumber))
        if (!response.count) {
            return res.status(StatusCodes.NOT_FOUND).json(ErrorResponse("Error occured while deleting the airplane.", "The given airplane is not found."))
        }
        return res.status(StatusCodes.OK).json(SuccessResponse("Successfully deleted the airplane.", response))
    } catch (error) {
        if (isPrismaError(error)) {
            let err = new prismaError(error)
            return res.status(err.statusCode).json(ErrorResponse(err.message, err))
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse("Error occured while deleting the airplane.", error))
    }
}

const updateAirplane = async (req, res) => {
    try {
        const response = await Airplane_Service.updateAirplane(parseInt(req.params.modelNumber), { modelName: req.body.modelName, capacity: req.body.capacity })
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
    createAirplane,
    getAll,
    getAirplane,
    deleteAirplane,
    updateAirplane
}