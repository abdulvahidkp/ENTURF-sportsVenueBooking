const router = require('express').Router();
const adminController = require('../controllers/adminController/adminLogin');
const userController = require('../controllers/adminController/userController')
const vmController = require('../controllers/adminController/vmController')
const sportsController = require('../controllers/adminController/sportsController')

router.post('/signin', adminController.adminLogin);

router.get('/users',userController.getUsers)
router.put('/users/blockStatus/:_id',userController.blockUser)

router.get('/vm',vmController.getVms)
router.put('/vm/blockStatus/:_id',vmController.blockVm)

router.get('/sports',sportsController.getSports)


module.exports = router;