const carRentAction = require('../actions/rent/carRentAction');

const carRent = (req, res) => {
    return carRentAction(req, res);
}

module.exports = {
    carRent
}