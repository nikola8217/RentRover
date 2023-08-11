const getAllCategoriesAction = require('../actions/category/getAllCategoriesAction');
const getSingleCategoryAction = require('../actions/category/getSingleCategoryAction');
const createCategoryAction = require('../actions/category/createCategoryAction');
const updateCategoryAction = require('../actions/category/updateCategoryAction');
const deleteCategoryAction = require('../actions/category/deleteCategoryAction');

const getAllCategories = (req, res) => {
    return getAllCategoriesAction(req, res);
}

const getSingleCategory = (req, res) => {
    return getSingleCategoryAction(req, res);
}

const createCategory = (req, res) => {
    return createCategoryAction(req, res);
}

const updateCategory = (req, res) => {
    return updateCategoryAction(req, res);
}

const deleteCategory = (req, res) => {
    return deleteCategoryAction(req, res);
}

module.exports = {
    getAllCategories,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory
}