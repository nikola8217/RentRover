const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title'],
        unique: true
    },
    content: {
        type: String,
        required: [true, 'Please provide content']
    },
    image: {
        type: String,
        default: 'example.jpeg',
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String
            },
            createdAt: {
                type: Date,
            }
        }
    ]
},{
    timestamps: true
});

module.exports = mongoose.model('Blog', BlogSchema);