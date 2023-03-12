const router = require('express').Router();
const vmController = require('../controllers/vmController/vmSignin');
const turfController = require('../controllers/vmController/turfController')

const verifyToken = require('../middleware/vm.verifyToken')

router.post('/signin', vmController.signin);
router.get('/sports',turfController.getSports)

router.get('/approve',verifyToken,vmController.isApproved)

router.post('/turf/add',verifyToken,turfController.addTurf)
router.get('/turfs',verifyToken,turfController.getTurfs)
router.put('/turf/block',verifyToken,turfController.changeBlock)

router.put('/profile',verifyToken,vmController.updateProfile)


module.exports = router;