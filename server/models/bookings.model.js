const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'users'
    },
    turfId:{
        type:mongoose.Types.ObjectId,
        ref:'turfs'
    },
    slotTime:String,
    sport:String,
    facility:String,
    slotDate:String,
    price:Number,
    paymentType:{
        type:String,
        enum: ['online','offline'],
        default:'online'
    }
})

module.exports = mongoose.model("bookings",bookingSchema)