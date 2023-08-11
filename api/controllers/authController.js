const loginAction = require('../actions/auth/loginAction');
const registerAction = require('../actions/auth/registerAction');

const register = (req, res) => {
    return registerAction(req, res);
}

const login = (req, res) => {
    return loginAction(req, res);
}

module.exports = {
    register,
    login
}

