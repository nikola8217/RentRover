const Brand = require('../../models/Brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../../errors');

const updateBrandAction = async (req, res) => {
    const { name } = req.body;

    if (!name) throw new BadRequestError('Please provide all values');
    
    const brand = await Brand.findOne({ _id: req.params.id});

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);

    brand.name = name;

    await brand.save();

    res.status(StatusCodes.OK).json({ brand });
}

module.exports = updateBrandAction;