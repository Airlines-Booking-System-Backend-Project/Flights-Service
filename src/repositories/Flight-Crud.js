const { PrismaClient } = require('@prisma/client')
const { addRowLock } = require('./queries')

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

    async getFilteredFlights(filter, orderBy) {
        const flights = await this.prisma.flight.findMany({
            where: filter,
            orderBy: orderBy,
            include: {
                airplane: true,
                arrivalAirport: {
                    include: {
                        city: true
                    }
                },
                departureAirport: true
            }
        })
        return flights
    }

    async updateSeats(id, seats, dec) {
        const response = await this.prisma.$transaction(async (t) => {
            t.$queryRaw(addRowLock(id))
            if (dec) {
                const response = await t.flight.update({
                    where: { id },
                    data: {
                        totalSeats: {
                            decrement: seats
                        }
                    }
                })
                return response
            } else {
                const response = await t.flight.update({
                    where: { id },
                    data: {
                        totalSeats: {
                            increment: seats
                        }
                    }
                })
                return response
            }
        }
    )
        return response
    }
}

module.exports = FlightService
