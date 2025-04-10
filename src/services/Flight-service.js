const { FlightCrud } = require('../repositories/index')

const FlightService = new FlightCrud()

async function createFlight(data) {
    const response = await FlightService.create(data)
    return response
}

async function getAllFlights() {
    const response = await FlightService.getAllFlights()
    return response
}

async function deleteFlight(id) {
    const response = await FlightService.delete(id)
    return response
}

async function updateFlight(id, data) {
    const response = await FlightService.update(id, data)
    return response
}

async function getFlight(id) {
    const response = await FlightService.get(id)
    return response
}

async function deleteAllFlights() {
    const response = await FlightService.deleteAllFlights()
    return response
}

async function getFilteredFlights(filter, orderBy) {
    const response = await FlightService.getFilteredFlights(filter, orderBy)
    return response
}

async function updateSeats(data) {
    const response = await FlightService.updateSeats(data.id, data.seats, data.dec)
    return response
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    deleteAllFlights,
    deleteFlight,
    updateFlight,
    getFilteredFlights,
    updateSeats
}