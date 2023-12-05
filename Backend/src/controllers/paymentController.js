const MomoService = require('../services/momoService');
const CourseOnline = require('../models/CourseOnlineModel.js');

const initiatePayment = async (req, res) => {
    try {
        const orderId = MomoService.generateOrderId();
        const amount = req.body.amount;
        const returnUrl = req.body.returnUrl;
        const notifyUrl = req.body.notifyUrl;

        const paymentResponse = await MomoService.initiatePayment(orderId, amount, returnUrl, notifyUrl);
        res.json(paymentResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

const finishPayment = async (req, res) => {
    try {
        const userId = req.body.userId;
        const courseId = req.body.courseId;

        const paymentResponse = await CourseOnline.findOneAndUpdate(
            { _id: courseId },
            { $push: { students: userId }},
            { new: true }
        )
        res.json(paymentResponse);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};

module.exports = {
    initiatePayment,
    finishPayment
};