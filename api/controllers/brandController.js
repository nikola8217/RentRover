const getAllBrandsAction = require('../actions/brand/getAllBrandsAction');
const getSingleBrandAction = require('../actions/brand/getSingleBrandAction');
const createBrandAction = require('../actions/brand/createBrandAction');
const updateBrandAction = require('../actions/brand/updateBrandAction');
const deleteBrandAction = require('../actions/brand/deleteBrandAction');

const getAllBrands = (req, res) => {
    return getAllBrandsAction(req, res);
}

const getSingleBrand = (req, res) => {
    return getSingleBrandAction(req, res);
}

const createBrand = (req, res) => {
    return createBrandAction(req, res);
}

const updateBrand = (req, res) => {
    return updateBrandAction(req, res);
}

const deleteBrand = (req, res) => {
    return deleteBrandAction(req, res);
}

module.exports = {
    getAllBrands,
    getSingleBrand,
    createBrand,
    updateBrand,
    deleteBrand
}