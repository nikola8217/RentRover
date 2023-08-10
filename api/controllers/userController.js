const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../errors');

const getAllUsers = async (req, res) => {
    const users = await User.find({}).select('-password');

    res.status(StatusCodes.OK).json({ users });
}

const getSingleUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select('-password');

    if (!user) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }
    
    res.status(StatusCodes.OK).json({ user });
}

const updateUser = async (req, res) => {
    const { email, name, role } = req.body;

    if (!email || !name) {
        throw new BadRequestError('Please provide all values');
    }

    const user = await User.findOne({ _id: req.user.userId });

    user.email = email;
    user.name = name;
    user.role = role ? role : user.role;

    await user.save();

    res.status(StatusCodes.OK).json({ user });
}

const deleteUser = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });

    if (!user) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    await user.remove();

    res.status(StatusCodes.OK).json({ message: 'User removed' });
}


module.exports = {
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}