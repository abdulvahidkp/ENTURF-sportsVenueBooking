const router = require('express').Router();
const adminController = require('../controllers/adminController/adminLogin');
const userController = require('../controllers/adminController/userController')

router.post('/signin', adminController.adminLogin);
router.get('/users',userController.getUsers)
router.put('/users/blockStatus/:_id',userController.blockUser)

module.exports = router;