const Rent = require('../../models/Rent');
const Car = require('../../models/Car');
const User = require('../../models/User');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');
const moment = require('moment-timezone');

const convertToDate = (dateString) => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dateParts = dateString.split(' ');

    let day = dateParts[1];
    if (day.endsWith(',')) {
        day = day.slice(0, -1); 
    }

    const month = dateParts[0]; 
    const year = dateParts[2]; 

    const monthIndex = months.findIndex((m) => m === month);

    if (monthIndex === -1) throw new BadRequestError('Invalid date format');

    const formattedDate = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${day.padStart(2, '0')}`;

    return new Date(formattedDate);
}

const carRentAction = async (req, res) => {
    const { user, name, pickUpLocation, dropOffLocation, startDate, endDate, pickUpTime, dropOffTime, car } = req.body;

    if (user) {
        const userModel = await User.findOne({ _id: user});

        if (!userModel) throw new NotFoundError('User not found');
    }

    const startDateRent = typeof startDate === 'string' ? convertToDate(startDate) : startDate;
    const endDateRent = typeof endDate === 'string' ? convertToDate(endDate) : endDate;

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    if (startDateRent < today) throw new BadRequestError('Start date must be today or a future date');

    if (endDateRent < today) throw new BadRequestError('End date must be today or a future date');

    if (startDateRent > endDateRent) throw new BadRequestError('Start date must be before end date');

    const oneDay = 24 * 60 * 60 * 1000;
    const numDays = Math.round(Math.abs((startDateRent - endDateRent) / oneDay));

    const carModel = await Car.findOne({ _id: car});

    if (!carModel) throw new NotFoundError('Car not found');

    const totalPrice = numDays * carModel.pricePerDay;

    const rentObject = {
        name,
        user,
        car,
        pickUpLocation,
        dropOffLocation,
        startDate: startDateRent,
        endDate: endDateRent,
        pickUpTime,
        dropOffTime,
        totalPrice
    }

    const rent= await Rent.create({...rentObject});

    res.status(StatusCodes.CREATED).json({ rent });
}

module.exports = carRentAction;