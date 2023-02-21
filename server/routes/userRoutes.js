const router = require('express').Router();
const userController = require('../controllers/userController/userSignin&Signup');
const vmController = require('../controllers/userController/vmController')

router.post('/signup',userController.userSignup)
router.post('/signin',userController.userSignin)
router.post('/mobileExist',userController.mobileExist)
router.get('/getUser',userController.getUser)

router.post('/vmMobile',vmController.mobileExist)
router.post('/vmSignup',vmController.vmSignup)

module.exports = router;