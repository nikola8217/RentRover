const Brand = require('../../models/Brand');
const { StatusCodes } = require('http-status-codes');

const createBrandAction = async (req, res) => {
    const brand = await Brand.create({...req.body});

    res.status(StatusCodes.CREATED).json({ brand });
}

module.exports = createBrandAction;