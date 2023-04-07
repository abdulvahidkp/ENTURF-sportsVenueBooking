const router = require('express').Router();
const vmController = require('../controllers/vmController/vmSignin');
const turfController = require('../controllers/vmController/turfController')
const bookingController = require('../controllers/vmController/bookingController')

const verifyToken = require('../middleware/vm.verifyToken')

router.post('/signin', vmController.signin);
router.get('/sports',turfController.getSports)

router.get('/approve',verifyToken,vmController.isApproved)

router.get('/',verifyToken,vmController.getLanding)

router.post('/turf',verifyToken,turfController.addTurf)
router.get('/turfs',verifyToken,turfController.getTurfs)
router.get('/turf/:id',turfController.getTurf)
router.put('/turf',turfController.updateTurf)
router.put('/turf/block',verifyToken,turfController.changeBlock)

router.get('/bookings',verifyToken,bookingController.getBookings)

router.put('/profile',verifyToken,vmController.updateProfile)


module.exports = router;