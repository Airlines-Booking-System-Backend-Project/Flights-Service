const { PrismaClient } = require('@prisma/client')

class AirportService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        const airport = await this.prisma.airport.create({
            data: data
        })
        return airport
    }

    async get(code) {
        const airport = await this.prisma.airport.findFirst({
            where: { code },
        })
        return airport
    }

    async update(code, data) {
        const updateAirport = await this.prisma.airport.update({
            where: { code },
            data: data,
        })
        return updateAirport
    }

    async delete(code) {
        const deletedAirport = await this.prisma.airport.deleteMany({
            where: { code },
        })
        return deletedAirport
    }

    async getAllAirports() {
        const airports = await this.prisma.airport.findMany()
        return airports
    }

    async deleteAllAirports() {
        const airports = await this.prisma.airport.deleteMany();
        return airports
    }
}


module.exports = AirportService