const Category = require('../models/Category');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError, BadRequestError } = require('../errors');

const getAllCategories = async (req, res) => {
    const categories = await Category.find({});

    res.status(StatusCodes.OK).json({categories});
}

const getSingleCategory = async (req, res) => {
    const category = await Category.findOne({_id: req.params.id});

    if (!category) throw new NotFoundError(`No category with id : ${req.params.id}`);
    
    res.status(StatusCodes.OK).json({ category });
}

const createCategory = async (req, res) => {
    const category = await Category.create({...req.body});

    res.status(StatusCodes.CREATED).json({ category: { name: category.name } });
}

const updateCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) throw new BadRequestError('Please provide all values');
    
    const category = await Category.findOne({ _id: req.params.id});

    if (!category) throw new NotFoundError(`No category with id : ${req.params.id}`);

    category.name = name;

    await category.save();

    res.status(StatusCodes.OK).json({ category });
}

const deleteCategory = async (req, res) => {
    const category = await Category.findOne({ _id: req.params.id });

    if (!category) throw new NotFoundError(`No category with id : ${req.params.id}`);

    await category.remove();

    res.status(StatusCodes.OK).json({ message: 'Category removed' });
}

module.exports = {
    getAllCategories,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory
}