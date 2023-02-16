const router = require('express').Router();
const userController = require('../controllers/userController/userSignin&Signup');

router.post('/signup',userController.userSignup)
router.post('/signin',userController.userSignin)
router.post('/mobileExist',userController.mobileExist)
router.get('/getUser',userController.getUser)

module.exports = router;