const mongoose = require('mongoose');

// const User = require('../User');
const UserSchema = new mongoose.Schema({
    id: {
        required: true
    },
    name: {
        type: String,
        required: false
        },
    status: {
        type: String,
        required: true,
        },
    species: {
        type: String,
        required: true,
    },
    origin: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = UserSchema;