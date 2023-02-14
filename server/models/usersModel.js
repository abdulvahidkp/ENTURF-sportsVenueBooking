const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    password: String
});

module.exports = mongoose.model('users', usersSchema);