const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const loginService = require('../services/auth/loginService');

const register = async (req, res) => {
    const user = await User.create({...req.body});
    const token = user.createJWT();

    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
}

const login = (req, res) => {
    return loginService(req, res);
}

module.exports = {
    register,
    login
}

