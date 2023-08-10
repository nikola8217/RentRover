const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const registerService = require('../services/auth/registerService');

const register = async (req, res) => {
    return registerService(req, res);
}

module.exports = {
    register
}

