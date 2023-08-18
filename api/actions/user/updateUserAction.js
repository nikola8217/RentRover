const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors');

const updateUserAction = async (req, res) => {
    const { email, name, role } = req.body;
    console.log(email);

    if (!email || !name) {
        throw new BadRequestError('Please provide all values');
    }

    const user = await User.findOne({ _id: req.params.id });

    user.email = email;
    user.name = name;
    user.role = role ? role : user.role;

    await user.save();

    res.status(StatusCodes.OK).json({ user });
}

module.exports = updateUserAction;