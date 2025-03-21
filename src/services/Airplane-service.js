const { AirplaneCrud } = require('../repositories')

const AirplaneService = new AirplaneCrud()

async function createAirplane(data) {
    try {
        const response = AirplaneService.create(data)
        return response
    } catch (error) {
       throw new Error(error)
    }
}

module.exports = { createAirplane }