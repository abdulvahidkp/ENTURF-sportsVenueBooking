const router = require('express').Router();
const adminController = require('../controllers/adminController/adminLogin');
const userController = require('../controllers/adminController/userController');
const vmController = require('../controllers/adminController/vmController');
const sportsController = require('../controllers/adminController/sportsController');
const turfController = require('../controllers/adminController/turfController');
const bookingController = require('../controllers/adminController/BookingController')
const verifyToken = require('../middleware/admin.verifyToken');

router.post('/signin', adminController.adminLogin); //

router.get('/', verifyToken, adminController.getDashboardDetails) //

router.get('/users', verifyToken, userController.getUsers) //
router.put('/users/blockStatus',verifyToken, userController.blockUser) //

router.get('/vm',verifyToken, vmController.getVms) //
router.put('/vm/blockStatus',verifyToken, vmController.blockVm) //
router.put('/vm/status', verifyToken, vmController.changeStatus); //

router.get('/sports',verifyToken, sportsController.getSports) //
router.put('/sports',verifyToken, sportsController.changeStatus) //

router.get('/bookings', verifyToken, bookingController.getBookings) //

router.get('/turf',verifyToken, turfController.getTurf) //
router.put('/turf/approve', verifyToken, turfController.approve); //
router.delete('/turf/:id', verifyToken, turfController.deleteTurf) //
router.put('/turf/block', verifyToken, turfController.changeBlock) //
router.get('/turf/:_id', verifyToken, turfController.getPerTurf) //


module.exports = router;