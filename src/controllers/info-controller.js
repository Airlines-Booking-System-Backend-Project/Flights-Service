const { StatusCodes } = require('http-status-codes')
const { SuccessResponse } = require('../utils/index')

const info = (req, res) => {
    return res.status(StatusCodes.OK).json(SuccessResponse('API is live'));
}

module.exports = { info }