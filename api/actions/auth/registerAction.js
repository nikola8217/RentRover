const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');

const registerAction = async (req, res) => {
    const user = await User.create({...req.body});

    res.status(StatusCodes.CREATED).json(user);
}

module.exports = registerAction;