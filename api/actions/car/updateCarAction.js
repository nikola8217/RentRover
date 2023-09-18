const Car = require('../../models/Car');
const Brand = require('../../models/Brand');
const Category = require('../../models/Category');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

const updateCarAction = async (req, res) => {
    const { 
        name,
        desc,
        brand,
        category,
        seats,
        doors,
        engine,
        year,
        mileage,
        transmission,
        fuel,
        exteriorColor,
        interiorColor,
        pricePerDay,
        image
    } = req.body;

    if (
        !name ||
        !desc || 
        !brand || 
        !category || 
        !seats || 
        !doors || 
        !engine ||
        !year ||
        !mileage ||
        !transmission ||
        !fuel ||
        !exteriorColor ||
        !interiorColor ||
        !pricePerDay ||
        !image
    ) throw new BadRequestError('Please provide all values');
    
    const checkBrand = await Brand.findOne({ _id: brand });

    if (!checkBrand) throw new NotFoundError(`No brand with id : ${brand}`);

    const checkCategory = await Category.findOne({_id: category});

    if (!checkCategory) throw new NotFoundError(`No category with id : ${category}`);

    const car = await Car.findOne({ _id: req.params.id});

    if (!car) throw new NotFoundError(`No car with id : ${req.params.id}`);

    car.name = name;
    car.desc = desc;
    car.brand = brand;
    car.category = category;
    car.seats = seats;
    car.doors = doors;
    car.engine = engine;
    car.year = year;
    car.mileage = mileage;
    car.transmission = transmission;
    car.fuel = fuel;
    car.exteriorColor = exteriorColor;
    car.interiorColor = interiorColor;
    car.pricePerDay = pricePerDay;
    car.image = image;

    await car.save();

    res.status(StatusCodes.OK).json({ car });
}

module.exports = updateCarAction;