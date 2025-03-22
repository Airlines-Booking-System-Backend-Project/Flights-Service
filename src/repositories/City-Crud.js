const { PrismaClient } = require('@prisma/client')

class CityService {
    constructor() {
        this.prisma = new PrismaClient()
    }

    async create(data) {
        const city = await this.prisma.city.create({
            data: data
        })
        return city
    }

    async get(id) {
        const city = await this.prisma.city.findFirst({
            where: { id },
        })
        return city
    }

    async update(id, data) {
        const cityupdate = await this.prisma.city.update({
            where: { id },
            data: data,
        })
        return cityupdate
    }

    async delete(id) {
        const deletedCity = await this.prisma.city.deleteMany({
            where: { id },
        })
        return deletedCity
    }

    async getAllCity() {
        const city = await this.prisma.city.findMany()
        return city
    }

    async deleteAllCities() {
        const city = await this.prisma.city.deleteMany();
        return city
    }
}

module.exports = CityService
