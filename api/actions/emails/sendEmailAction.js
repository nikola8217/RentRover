const nodemailer = require('nodemailer');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../../errors');
const validator = require('validator');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmailAction = async (req, res) => {
    const { email, subject, content } = req.body;

    if (email === '' || subject === '' || content === '') throw new BadRequestError('Please fill in all fielads');

    if (!validator.isEmail(email)) throw new BadRequestError('Invalid email address');
    
    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USERNAME,
        subject: subject,
        html: content,
    };

    await transporter.sendMail(mailOptions);

    res.status(StatusCodes.CREATED).json({msg: 'Email sent successfully'});
}

module.exports = sendEmailAction;