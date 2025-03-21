const { PrismaClient } = require('@prisma/client')

class AirplaneService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        try {
            const airplane = await this.prisma.airplane.create({
                data: data
            })
            return airplane
        } catch (error) {
            throw new Error(error);
        }
    }

    async get(modelNumber) {
        try {
            const airplane = await this.prisma.airplane.findUnique({
                where: { modelNumber },
            })
            return airplane
        } catch (error) {
            throw new Error(error)
        }
    }

    async update(modelNumber, data) {
        try {
            const updatedAirplane = await this.prisma.airplane.update({
                where: { modelNumber },
                data: data,
            })
            return updatedAirplane
        } catch (error) {
            throw new Error(error)
        }
    }

    async delete(modelNumber) {
        try {
            const deletedAirplane = await this.prisma.airplane.delete({
                where: { modelNumber },
            })
            return deletedAirplane
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllAirplanes() {
        try {
            const airplanes = await this.prisma.airplane.findMany()
            return airplanes
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = AirplaneService
