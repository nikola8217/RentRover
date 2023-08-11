const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors');

const updateUserAction = async (req, res) => {
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

module.exports = updateUserAction;