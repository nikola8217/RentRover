const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
    },
    desc: {
        type: String,
        required: [true, 'Please provide description']
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please provide brand'],
        ref: 'Brand'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please provide category'],
        ref: 'Category'
    },
    seats: {
        type: String,
        required: [true, 'Please provide how many seats'],
    },
    doors: {
        type: String,
        required: [true, 'Please provide how many doors'],
    },
    engine: {
        type: String,
        required: [true, 'Please provide engine'],
    },
    year: {
        type: Number,
        required: [true, 'Please provide engine'],
    },
    mileage: {
        type: Number,
        required: [true, 'Please provide mileage'],
    },
    transmission: {
        type: String,
        required: [true, 'Please provide transmission'],
    },
    fuel: {
        type: String,
        required: [true, 'Please provide fuel'],
    },
    exteriorColor: {
        type: String,
        required: [true, 'Please provide exterior color'],
    },
    ineriorColor: {
        type: String,
        required: [true, 'Please provide interior color'],
    },
    pricePerDay: {
        type: Number,
        required: [true, 'Please provide price'],
    },
    image: {
        type: String,
        default: '/uploads/example.jpeg',
    },
});

module.exports = mongoose.model('Car', CarSchema);
