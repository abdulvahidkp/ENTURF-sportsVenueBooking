const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    orderId: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'users'
    },
    turfId: {
        type: mongoose.Types.ObjectId,
        ref: 'turfs'
    },
    slotTime: {
        type: String,
        required: true
    },
    sport: {
        type: String,
        required: true
    },
    facility: {
        type: String,
        required: true
    },
    slotDate: {
        type: String,
        required: true
    },
    price: Number,
    paymentType: {
        type: String,
        enum: ['online', 'offline'],
        default: 'online'
    },
    refund: {
        type: String,
        default: 'not processed'
    },
    created_at: {
        type: Date, default: Date.now
    }
})

module.exports = mongoose.model("bookings", bookingSchema);