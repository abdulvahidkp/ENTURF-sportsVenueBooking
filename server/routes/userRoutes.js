const router = require('express').Router();
const userController = require('../controllers/userController/userSignin&Signup');
const vmController = require('../controllers/userController/vmController')
const turfController = require('../controllers/userController/turfController')

router.post('/signup',userController.userSignup)
router.post('/signin',userController.userSignin)
router.post('/mobileExist',userController.mobileExist)
router.get('/getUser',userController.getUser)
router.get('/forgotPwd/mobileExist',userController.MobileExistForForgot)
router.post('/forgotPwd',userController.newPassSet)

router.post('/signin/google',userController.googleSignin)

router.post('/vmMobile',vmController.mobileExist)
router.post('/vmSignup',vmController.vmSignup)

router.get('/venues/:district',turfController.getTurfs)
router.get('/venue/:_id',turfController.getTurf)

module.exports = router;