const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');

const getAllUsersAction = async (req, res) => {
    const users = await User.find({}).select('-password');

    res.status(StatusCodes.OK).json({ users });
}

module.exports = getAllUsersAction;