const getAllUsersAction = require('../actions/user/getAllUsersAction');
const getSingleUserAction = require('../actions/user/getSingleUserAction');
const updateUserAction = require('../actions/user/updateUserAction');
const deleteUserAction = require('../actions/user/deleteUserAction');

const getAllUsers = (req, res) => {
    return getAllUsersAction(req, res);
}

const getSingleUser = (req, res) => {
    return getSingleUserAction(req, res);
}

const updateUser = (req, res) => {
    return updateUserAction(req, res);
}

const deleteUser = (req, res) => {
    return deleteUserAction(req, res);
}


module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}