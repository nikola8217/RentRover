const loginAction = require('../actions/auth/loginAction');
const registerAction = require('../actions/auth/registerAction');
const changePasswordAction = require('../actions/auth/changePasswordAction');

const register = (req, res) => {
    return registerAction(req, res);
}

const login = (req, res) => {
    return loginAction(req, res);
}

const changePassword = (req, res) => {
    return changePasswordAction(req, res);
}

module.exports = {
    register,
    login,
    changePassword
}

