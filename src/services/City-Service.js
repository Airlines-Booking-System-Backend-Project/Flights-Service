const { CityCrud } = require('../repositories/index')

const CityService = new CityCrud()

async function createCity(data){
    const response = await CityService.create(data)
    return response
}

async function getAllCity(){
    const response = await CityService.getAllCity()
    return response
}

async function deleteCity(id){
    const response = await CityService.delete(id)
    return response
}

async function updateCity(id, data){
    const response = await CityService.update(id, data)
    return response
}

async function getCity(id){
    const response = await CityService.get(id)
    return response
}

async function deleteAllCity(){
    const response = await CityService.deleteAllCities()
    return response
}

module.exports = {
    createCity,
    getAllCity,
    deleteCity,
    updateCity,
    getCity,
    deleteAllCity
}