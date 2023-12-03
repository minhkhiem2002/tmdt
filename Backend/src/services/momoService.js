const axios = require('axios');
require('dotenv').config();

const MOMO_PARTNER_CODE = process.env.MOMO_PARTNER_CODE;
const MOMO_ACCESS_KEY = process.env.MOMO_ACCESS_KEY;
const MOMO_SECRET_KEY = process.env.MOMO_SECRET_KEY;

const generateOrderId = () => {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ORDER_${timestamp}_${random}`;
};

const createSignature = (orderId, amount, returnUrl, notifyUrl) => {
  const rawData = `partnerCode=${MOMO_PARTNER_CODE}&accessKey=${MOMO_ACCESS_KEY}&requestId=${orderId}&amount=${amount}&orderId=${orderId}&orderInfo=Payment for online course&returnUrl=${returnUrl}&notifyUrl=${notifyUrl}&extraData=`;

  // Logic để tạo chữ ký dựa trên dữ liệu truyền vào và khóa bí mật của bạn
  // Trong ví dụ này, sử dụng crypto.createHmac để tạo chữ ký với thuật toán SHA256

  const crypto = require('crypto');
  const signature = crypto.createHmac('sha256', MOMO_SECRET_KEY).update(rawData).digest('hex');
  return signature;
};


const initiatePayment = async (orderId, amount, returnUrl, notifyUrl) => {
    try {
        const endpoint = 'https://test-payment.momo.vn/gw_payment/transactionProcessor';

        const payload = {
            partnerCode: MOMO_PARTNER_CODE,
            accessKey: MOMO_ACCESS_KEY,
            requestId: orderId,
            amount: amount.toString(),
            orderId: orderId,
            orderInfo: 'Payment for online course',
            returnUrl: returnUrl,
            notifyUrl: notifyUrl,
            extraData: '',
            requestType: 'captureMoMoWallet',
            signature: createSignature(orderId, amount, returnUrl, notifyUrl),
        };

        const response = await axios.post(endpoint, payload);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

module.exports = {
    generateOrderId,
    createSignature,
    initiatePayment,
};