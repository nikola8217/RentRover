const carRentAction = require('../actions/rent/carRentAction');
const getRentsByUserAction = require('../actions/rent/getRentsByUser');
const cancelRentAction = require('../actions/rent/cancelRentAction');

const carRent = (req, res) => {
    return carRentAction(req, res);
}
const getRentsByUser = (req, res) => {
    return getRentsByUserAction(req, res);
}

const cancelRent = (req, res) => {
    return cancelRentAction(req, res);
}

module.exports = {
    carRent,
    getRentsByUser,
    cancelRent
}