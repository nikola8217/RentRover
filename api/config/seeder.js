const moongose = require('mongoose');
const dotenv = require('dotenv');
const cars = require('../data/cars');
const Car = require('../models/Car');
const Rent = require('../models/Rent');
const blogs = require('../data/blogs');
const Blog = require('../models/Blog');
const connectDB = require('./db');

dotenv.config();

connectDB(process.env.MONGO_URI);

const importData = async () => {
    try {
        await Rent.deleteMany();
        await Car.deleteMany();
        await Blog.deleteMany();

        await Car.insertMany(cars);
        await Blog.insertMany(blogs);
        console.log('Data imported!');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Rent.deleteMany();
        await Car.deleteMany();
        await Blog.deleteMany();
        console.log('Data destroyed!');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}

