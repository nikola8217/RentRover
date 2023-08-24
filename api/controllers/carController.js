const getCarsAction = require('../actions/car/getCarsAction');
const getSingleCarAction = require('../actions/car/getSingleCarAction');
const createCarAction = require('../actions/car/createCarAction');
const updateCarAction = require('../actions/car/updateCarAction');
const deleteCarAction = require('../actions/car/deleteCarAction');
const getRandomCarsAction = require('../actions/car/getRandomCarsAction');

const getCars = (req, res) => {
    return getCarsAction(req, res);
}

const getSingleCar = (req, res) => {
    return getSingleCarAction(req, res);
}

const createCar = (req, res) => {
    return createCarAction(req, res);
}

const updateCar = (req, res) => {
    return updateCarAction(req, res);
}

const deleteCar= (req, res) => {
    return deleteCarAction(req, res);
}
const getRandomCars= (req, res) => {
    return getRandomCarsAction(req, res);
}

module.exports = {
    getCars,
    getSingleCar,
    createCar,
    updateCar,
    deleteCar,
    getRandomCars
}