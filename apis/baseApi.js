require('dotenv').config();

module.exports = {
  BASE_URL: process.env.BASE_URL,
  VERIFY_OTP_ENDPOINT: '/api/v1/user_authentication/verify_otp'
};
