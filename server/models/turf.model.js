const mongoose = require('mongoose')


const turfSchema = new mongoose.Schema({
    vmId:{
        type:mongoose.Types.ObjectId,
        ref:'vms'
    },
    venueName: String,
    mobile: Number,
    lng: Number,
    lat: Number,
    place:String,
    image:String,
    description: String,
    actualPrice: Number,
    sellingPrice: Number,
    document: String,
    sport: String,
    district: String,
    facility: String,
    slots: [],
    isBlocked: {
        type: Boolean,
        default: false
    },
    vmIsBlocked: {
        type: Boolean,
        default: false
    },
    approved: {
        type: Boolean,
        default: false
    }
},
{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model('turfs',turfSchema);
