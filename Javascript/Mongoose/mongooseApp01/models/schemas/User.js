const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
        },
    email: {
        type: String,
        required: true,
        unique: true,
        },
    password: {
        type: String,
        required: true,
        minlength: 6
        },
    role: {
        type: String,
        default: 'user',
        required: true
    },
    tokens:[String]
});

module.exports = UserSchema;
