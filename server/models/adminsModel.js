const mongoose = require('mongoose');


const adminsSchema = new mongoose.Schema({
    name: String,
    password: String
});


module.exports = mongoose.model('admins', adminsSchema);