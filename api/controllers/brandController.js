const Brand = require('../models/Brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../errors');

const getAllBrands = async (req, res) => {
    const brands = await Brand.find({});

    res.status(StatusCodes.OK).json({brands});
}

const getSingleBrand = async (req, res) => {
    const brand = await Brand.findOne({_id: req.params.id});

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);
    
    res.status(StatusCodes.OK).json({ brand });
}

const createBrand = async (req, res) => {
    const brand = await Brand.create({...req.body});

    res.status(StatusCodes.CREATED).json({ brand: { name: brand.name } });
}

const updateBrand = async (req, res) => {
    const { name } = req.body;

    if (!name) throw new BadRequestError('Please provide all values');
    
    const brand = await Brand.findOne({ _id: req.params.id});

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);

    brand.name = name;

    await brand.save();

    res.status(StatusCodes.OK).json({ brand });
}

const deleteBrand = async (req, res) => {
    const brand = await Brand.findOne({ _id: req.params.id });

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);

    await brand.remove();

    res.status(StatusCodes.OK).json({ message: 'Brand removed' });
}

module.exports = {
    getAllBrands,
    getSingleBrand,
    createBrand,
    updateBrand,
    deleteBrand
}