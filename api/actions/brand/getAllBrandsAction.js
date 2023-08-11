const Brand = require('../../models/Brand');
const { StatusCodes } = require('http-status-codes');

const getAllBrandsAction = async (req, res) => {
    const brands = await Brand.find({});

    res.status(StatusCodes.OK).json({brands});
}

module.exports = getAllBrandsAction;