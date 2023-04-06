const turfs = require('../../models/turf.model')
const bookings = require('../../models/bookings.model')
const users = require('../../models/users.model')
const Razorpay = require('razorpay')
const crypto = require('crypto')

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEYID,
    key_secret: process.env.RAZORPAY_SECRET
});

function isSlotTimePassed(bookedDate, bookedTime) {
    const bookingDate = new Date(`${bookedDate} ${bookedTime.substring(0, 5)}`);
    const now = new Date();
    const eightHoursAdd = new Date(now.getTime() + (8 * 60 * 60 * 1000));
    console.log(bookingDate)
    console.log(eightHoursAdd)
    // Check if the booking time is in the future and is less than 8 hours away
    if (bookingDate < eightHoursAdd) return true;
    return false;
}

module.exports = {
    bookTurf: async (req, res) => {
        try {
            if (!req.body.turf) return res.status(400).json({ message: 'turf - id field is required' })
            const response = await turfs.findOne({ _id: req.body.turf })
            const rs = response.actualPrice - (response.actualPrice * response.discountPercentage / 100)
            const options = {
                amount: rs * 100,
                currency: "INR",
                receipt: crypto.randomBytes(10).toString('hex')
            }
            instance.orders.create(options, (error, order) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ message: 'something went wrong', error: error.messaage });
                }
                console.log(order);
                res.status(200).json(order);
            })
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ message: 'error occured', error: error.message });
        }
    },

    verifyPayment: async (req, res) => {
        try {
            console.log(req.body)
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature, turfId, slotTime, slotDate, price, sport, facility } = req.body;
            if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature || !turfId || !slotTime || !slotDate || !price || !sport || !facility) return res.status(400).json({ messaage: 'razorpay_order_id, razorpay_payment_id, razorpay_signature, turfId, slotTime, slotDate, price, sport, facility - fields required' })
            const setPrice = price / 100;
            const sign = razorpay_order_id + "|" + razorpay_payment_id
            const expectedSign = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET).update(sign.toString()).digest('hex')
            if (razorpay_signature === expectedSign) {
                await bookings.create({ orderId: razorpay_order_id, userId: req._id, turfId, slotTime, slotDate, price: setPrice, sport, facility })
                return res.status(200).json({ message: 'payment verified succesfully' })
            }
            return res.status(400).json({ message: 'Invalid signature sent!' })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'internal server error' })
        }
    },

    getBookings: async (req, res) => {
        try {
            bookings.find({ userId: req._id }).populate('turfId').then(response => {
                res.status(200).json(response)
            })
        } catch (error) {
            conosle.log(error)
            res.status(500).json({ message: 'internal server error' })
        }
    },

    makeRefund: async (req, res) => {
        const { bookingId } = req.params;
        const booking = await bookings.findOne({ _id: bookingId });
        console.log('will erro')
        if (isSlotTimePassed(booking.slotDate, booking.slotTime)) return res.status(400).json({ message: 'slot cancellation failed - time for cancellation expired' });
        conosle.log('working')
        console.log('booking.orderId', booking.orderId);

        try {
            const payment = await instance.payments.fetch(booking.orderId);
            console.log('payment :', payment);
            const refund = await instance.payments.refund(payment.id, {
                amount: payment.amount,
            });

            if (refund.status === 'processed') {
                console.log('Refund successful');
                booking.refund = 'processed';
                await booking.save();
                res.status(200).json({
                    message: 'Refund processed successfully',
                });
            } else {
                console.log('Refund failed');
                res.status(500).json({
                    message: 'An error occurred while processing the refund',
                });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'An error occurred while processing the refund',
            });
        }
    },

    refundToWallet: async (req, res) => {
        const { bookingId } = req.params;
        try {
            const booking = await bookings.findOne({ _id: bookingId});
            if(booking.refund === 'processed') return res.status(400).json({message:'refund already processed for this order'})
            if (isSlotTimePassed(booking.slotDate, booking.slotTime)) return res.status(400).json({ message: 'Time for cancellation expired' });
            let updatedUser = await users.findOneAndUpdate({ _id: req._id }, { $inc: { wallet: booking.price }})
            booking.refund = 'processed';
            await booking.save();
            return res.status(200).json({ message: 'refund processed to users wallet', wallet: updatedUser.wallet })
        } catch (error) {
            console.log(error.message)
            res.status(400).json({ message: error.message })
        }
    }
}