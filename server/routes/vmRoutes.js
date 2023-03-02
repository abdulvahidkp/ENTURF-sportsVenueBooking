const router = require('express').Router();
const vmController = require('../controllers/vmController/vmSignin');
const turfController = require('../controllers/vmController/turfController')

const verifyToken = require('../middleware/vm.verifyToken')

router.post('/signin', vmController.signin);
router.get('/sports',turfController.getSports)

router.post('/turf/add',verifyToken,turfController.addTurf)

module.exports = router;