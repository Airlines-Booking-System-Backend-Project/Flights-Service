const validateInput = require('./input-middleware')

const constraints = [
    { params: 'code', dataType: 'string' },
    { params: 'name', dataType: 'string' },
    { params: 'cityId', dataType: 'number' }
]


module.exports = {
    validateInputs: validateInput(constraints)
}