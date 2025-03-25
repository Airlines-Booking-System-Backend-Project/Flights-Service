const { PrismaClient } = require('@prisma/client')

class AirplaneService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        const airplane = await this.prisma.airplane.create({
            data: data
        })
        return airplane
    }

    async get(modelNumber) {
        const airplane = await this.prisma.airplane.findFirst({
            where: { modelNumber },
        })
        return airplane
    }

    async update(modelNumber, data) {
        const updateAirplane = await this.prisma.airplane.update({
            where: { modelNumber },
            data: data,
        })
        return updateAirplane
    }

    async delete(modelNumber) {
        const deletedAirplane = await this.prisma.airplane.deleteMany({
            where: { modelNumber },
        })
        return deletedAirplane
    }

    async getAllAirplanes() {
        const airplanes = await this.prisma.airplane.findMany()
        return airplanes
    }

    async deleteAllAirplanes() {
        const airplanes = await this.prisma.airplane.deleteMany();
        return airplanes
    }
}

module.exports = AirplaneService
