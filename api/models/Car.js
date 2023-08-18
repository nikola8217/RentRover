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
        type: Number,
        required: [true, 'Please provide how many seats'],
    },
    doors: {
        type: Number,
        required: [true, 'Please provide how many doors'],
    },
    engine: {
        type: Number,
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
        enum: ['automatic', 'manual'],
        default: 'manual',
    },
    fuel: {
        type: String,
        enum: ['gasoline', 'diesel'],
        default: 'gasoline',
    },
    exteriorColor: {
        type: String,
        required: [true, 'Please provide exterior color'],
    },
    interiorColor: {
        type: String,
        required: [true, 'Please provide interior color'],
    },
    pricePerDay: {
        type: Number,
        required: [true, 'Please provide price'],
    },
    image: {
        type: String,
        default: 'example.jpeg',
    },
});

module.exports = mongoose.model('Car', CarSchema);
