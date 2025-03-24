const { PrismaClient } = require('@prisma/client')

class FlightService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        const flight = await this.prisma.flight.create({
            data: data
        })
        return flight
    }

    async get(id) {
        const flight = await this.prisma.flight.findFirst({
            where: { id },
        })
        return flight
    }

    async update(id, data) {
        const flightupdate = await this.prisma.flight.update({
            where: { id },
            data: data,
        })
        return flightupdate
    }

    async delete(id) {
        const deletedflight = await this.prisma.flight.deleteMany({
            where: { id },
        })
        return deletedflight
    }

    async getAllFlights() {
        const flight = await this.prisma.flight.findMany()
        return flight
    }

    async deleteAllFlights() {
        const flight = await this.prisma.flight.deleteMany();
        return flight
    }

    async getFilteredFlights(filter,orderBy) {
        const flights = await this.prisma.flight.findMany({
            where: filter,
            orderBy: orderBy
        })
        return flights
    }
}

module.exports = FlightService
