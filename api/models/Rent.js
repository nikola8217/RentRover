const mongoose = require('mongoose');

const RentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    car: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please provide car'],
        ref: 'Car'
    },
    pickUpLocation: {
        type: String,
        required: [true, 'Please provide pick up location']
    },
    dropOffLocation: {
        type: String,
        required: [true, 'Please provide drop off location']
    },
    startDate: {
        type: Date,
        required: [true, 'Please provide start date']
    },
    endDate: {
        type: Date,
        required: [true, 'Please provide end date']
    },
    pickUpTime: {
        type: String,
        required: [true, 'Please provide pick up time']
    },
    dropOffTime: {
        type: String,
        required: [true, 'Please provide drop off time']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Please provide total price'],
    },

});

module.exports = mongoose.model('Rent', RentSchema);