const mongoose = require('mongoose');
const UserSchema = require('./schemas/User');
const User = mongoose.model('User', UserSchema);

module.exports = User;

// let User = {
//     name: {
//         first: 'Axel',
//         last: 'Urizar'
//     },
//     email: 'axelurizarmartin@gmail.com',
//     password: '123456'
// }
