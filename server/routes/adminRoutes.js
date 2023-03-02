const router = require('express').Router();
const adminController = require('../controllers/adminController/adminLogin');
const userController = require('../controllers/adminController/userController');
const vmController = require('../controllers/adminController/vmController');
const sportsController = require('../controllers/adminController/sportsController');
const turfController = require('../controllers/adminController/turfController');
const verifyToken = require('../middleware/admin.verifyToken');

router.post('/signin', adminController.adminLogin);

router.get('/users',userController.getUsers)
router.put('/users/blockStatus/:_id',userController.blockUser)

router.get('/vm',vmController.getVms)
router.put('/vm/blockStatus/:_id',vmController.blockVm)
router.put('/vm/approve/:_id',vmController.approve);
router.delete('/vm/:_id',vmController.deleteVm)

router.get('/sports',sportsController.getSports)
router.put('/sports',sportsController.changeStatus)

router.get('/turf',turfController.getTurf)
router.put('/turf/approve',verifyToken,turfController.approve);
router.delete('/turf/:_id',verifyToken,turfController.deleteTurf)


module.exports = router;