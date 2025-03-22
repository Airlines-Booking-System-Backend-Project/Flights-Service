const { AirplaneCrud } = require('../repositories')

const AirplaneService = new AirplaneCrud()

async function createAirplane(data) {
    const response = await AirplaneService.create(data)
    return response
}

async function getAllAirplanes() {
    const response = await AirplaneService.getAllAirplanes();
    return response
}

async function getAirplane(id) {
    const response = await AirplaneService.get(id)
    return response
}

async function updateAirplane(id, data) {
    const response = await AirplaneService.update(id, data)
    return response
}

async function deleteAirplane(id) {
    const response = await AirplaneService.delete(id)
    return response
}

async function deleteAllAirplanes() {
    const response = await AirplaneService.deleteAllAirplanes()
    return response
}

module.exports = {
    createAirplane,
    getAllAirplanes,
    getAirplane,
    updateAirplane,
    deleteAirplane,
    deleteAllAirplanes
}