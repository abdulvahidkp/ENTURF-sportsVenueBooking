const mongoose = require('mongoose');

const VmSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    password: String,
    blockStatus: {
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('vms',VmSchema)