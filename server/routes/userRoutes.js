const router = require('express').Router();
const userController = require('../controllers/userContoller');

router.get('/', userController.helloWorld);

module.exports = router;