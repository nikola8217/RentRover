const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const getSingleUserAction = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select('-password');

    if (!user) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }
    
    res.status(StatusCodes.OK).json({ user });
}

module.exports = getSingleUserAction;