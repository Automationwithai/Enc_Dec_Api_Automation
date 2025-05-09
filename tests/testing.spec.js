const { test, expect } = require('@playwright/test');
const { encryptData, decryptData } = require('../utils/cryptoUtil');
const { defaultHeaders } = require('../utils/headers');

const { BASE_URL, VERIFY_OTP_ENDPOINT } = require('../apis/baseApi'); // Add endpoints from the file in section {}
const { verifyOtpPayload } = require('../test_data/Payloads'); // Add payloads from the file in section {}

test('Verify OTP API with encrypted payload', async ({ request }) => {
  const encrypted = encryptData(verifyOtpPayload);

  const response = await request.post(BASE_URL + VERIFY_OTP_ENDPOINT, {
    headers: defaultHeaders,
    data: encrypted
  });
  

  const body = await response.text();
  console.log('\n📥 Raw Server Response:\n', body);
  

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();

const parsedResponse = decryptData(body);

// Optional: assertions based on parsedResponse
//expect(parsedResponse?.code).toBe(0);
expect(parsedResponse).toHaveProperty("message");

 

});
