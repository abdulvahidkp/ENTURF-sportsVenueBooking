const router = require('express').Router();
const userController = require('../controllers/userController/userSignin&Signup');
const vmController = require('../controllers/userController/vmController')
const turfController = require('../controllers/userController/turfController')
const bookingController = require('../controllers/userController/bookingController')

const verifyToken = require('../middleware/user.verifyToken')

router.post('/signup', userController.userSignup) //
router.post('/signin', userController.userSignin) //
router.post('/mobileExist', userController.mobileExist) //
router.get('/getUser', userController.getUser) //no needed
router.get('/forgotPwd/mobileExist', userController.MobileExistForForgot) //
router.post('/forgotPwd', userController.newPassSet) //
router.put('/changeName',verifyToken,userController.setName)

router.post('/signin/google', userController.googleSignin) //

router.post('/vmMobile', vmController.mobileExist) //
router.post('/vmSignup', vmController.vmSignup) //

router.get('/venues/:district', turfController.getTurfs) //
router.get('/venue/:_id', turfController.getTurf) //

router.post('/bookedSlot',turfController.getBookedSlots) //

router.post('/book', verifyToken, bookingController.bookTurf) //
router.post('/verifyPayment',verifyToken,bookingController.verifyPayment) //

router.get(`/booking/:bookingId/refund`,verifyToken,bookingController.refundToWallet)

router.get('/bookings',verifyToken,bookingController.getBookings) //

module.exports = router;