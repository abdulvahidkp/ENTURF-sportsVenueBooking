const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email:String,
    password: String,
    wallet:{
        type:Number,
        default:0
    },
    blockStatus: {
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('users', usersSchema);