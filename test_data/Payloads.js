module.exports = {
  verifyOtpPayload: {
    flag: "mobile_number",
    otp: "1254",
    user_type: "mentee",
    country_code: "91",
    mobile_number: "1234567890",
    email: "test@gmail.com",
    user_name: "jhon",
    test_data: "test"
  },

  registerUserPayload: {
    name: "John Doe",
    email: "john@example.com",
    password: "securePassword123"
  },

  resetPasswordPayload: {
    email: "john@example.com",
    new_password: "newStrongPassword"
  }

  // Add more payloads here as needed
};
