const sendEmailAction = require('../actions/emails/sendEmailAction');

const sendEmail = (req, res) => {
    return sendEmailAction(req, res);
}

module.exports = {
    sendEmail
}