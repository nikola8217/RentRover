const mongoose = require('mongoose');

const BrandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide brand name'],
        unique: true
    }
});

module.exports = mongoose.model('Brand', BrandSchema);