const router = require('express').Router();
const managerController = require('../controllers/managerController');

router.get('/', managerController.helloWorld);

module.exports = router;