const Brand = require('../../models/Brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const getSingleBrandAction = async (req, res) => {
    const brand = await Brand.findOne({_id: req.params.id});

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);
    
    res.status(StatusCodes.OK).json({ brand });
}

module.exports = getSingleBrandAction;