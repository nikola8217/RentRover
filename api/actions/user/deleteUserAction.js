const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteUserAction = async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });

    if (!user) {
        throw new NotFoundError(`No user with id : ${req.params.id}`);
    }

    await user.remove();

    res.status(StatusCodes.OK).json({ message: 'User removed' });
}

module.exports = deleteUserAction;