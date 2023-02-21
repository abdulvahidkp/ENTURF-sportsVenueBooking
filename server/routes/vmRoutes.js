const router = require('express').Router();
const vmController = require('../controllers/vmController/vmSignin');

router.post('/signin', vmController.signin);

module.exports = router;