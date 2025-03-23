const { AirportCrud } = require('../repositories')

const AirportService = new AirportCrud()

async function createAirport(data) {
    const response = await AirportService.create(data)
    return response
}

async function getAllAirports() {
    const response = await AirportService.getAllAirports();
    return response
}

async function getAirport(code) {
    const response = await AirportService.get(code)
    return response
}

async function updateAirport(code, data) {
    const response = await AirportService.update(code, data)
    return response
}

async function deleteAirport(code) {
    const response = await AirportService.delete(code)
    return response
}

async function deleteAllAirports() {
    const response = await AirportService.deleteAllAirports()
    return response
}

module.exports = {
    createAirport,
    getAirport,
    getAllAirports,
    deleteAirport,
    updateAirport,
    deleteAllAirports
}