const registerService = require('../services/auth/registerService');
const loginService = require('../services/auth/loginService');

const register = async (req, res) => {
    return registerService(req, res);
}

const login = async (req, res) => {
    return loginService(req, res);
}

module.exports = {
    register,
    login
}

