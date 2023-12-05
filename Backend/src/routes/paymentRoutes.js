const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/initiate-payment', paymentController.initiatePayment);
router.post('/finish-payment', paymentController.finishPayment);

module.exports = router;