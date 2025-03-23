const validateInput = require('./input-middleware')

const constraints = [
    { params: 'modelName', dataType: 'string' },
    { params: 'capacity', dataType: 'number' }
]


module.exports = {
    validateInputs: validateInput(constraints)
}