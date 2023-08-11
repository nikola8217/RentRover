const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        unique: true
    }
});

module.exports = mongoose.model('Category', CategorySchema);