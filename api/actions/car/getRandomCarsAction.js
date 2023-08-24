const Car = require('../../models/Car');
const { StatusCodes } = require('http-status-codes');

const getRandomCars = async (req, res) => {
  const cars = await Car.aggregate([
    { $sample: { size: 4 } }, 
    {
      $lookup: {
        from: 'categories', 
        localField: 'category',
        foreignField: '_id',
        as: 'categoryInfo'
      }
    },
    {
      $lookup: {
        from: 'brands',
        localField: 'brand',
        foreignField: '_id',
        as: 'brandInfo'
      }
    },
    {
      $project: {
        name: 1,
        category: { $arrayElemAt: ['$categoryInfo.name', 0] },
        brand: { $arrayElemAt: ['$brandInfo.name', 0] },
        seats: 1,
        doors: 1,
        pricePerDay: 1,
        image: 1
        
      }
    }
  ]);
  

    res.status(StatusCodes.OK).json(cars);
}

module.exports = getRandomCars;