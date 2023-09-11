const User = require('../../models/User');
const { BadRequestError, UnauthenticatedError } = require('../../errors')
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');

const changePasswordAction = async (req, res) => {
    const { oldPassword, newPassword, passConfirmation, userID } = req.body;

    if (oldPassword === '' || newPassword === '' || passConfirmation === '') throw new BadRequestError('Please fill in all fields');

    const user = await User.findOne({ _id: userID });

    if (!user) throw new UnauthenticatedError('User not found');

    const isPasswordCorrect = await user.comparePassword(oldPassword);

    if (!isPasswordCorrect) throw new UnauthenticatedError('Old password is not correct');

    if (newPassword !== passConfirmation) throw new BadRequestError('New password and confirmation do not match');

    if (newPassword.length < 6) throw new BadRequestError('New password must be at least 6 characters long');
      
    console.log('Old password:', oldPassword);
    console.log('New password:', newPassword);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    console.log('Hashed password:', user.password);

    await user.save();

    console.log('User saved with new password');
    
    res.status(StatusCodes.OK).json({ user });
      
};

module.exports = changePasswordAction;