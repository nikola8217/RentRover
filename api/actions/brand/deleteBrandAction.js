const Brand = require('../../models/Brand');
const { StatusCodes } = require('http-status-codes');
const { NotFoundError } = require('../../errors');

const deleteBrandAction = async (req, res) => {
    const brand = await Brand.findOne({ _id: req.params.id });

    if (!brand) throw new NotFoundError(`No brand with id : ${req.params.id}`);

    await brand.remove();

    res.status(StatusCodes.OK).json({ message: 'Brand removed' });
}

module.exports = deleteBrandAction;