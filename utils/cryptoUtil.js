const CryptLib = require('cryptlib');
require('dotenv').config();

const key = CryptLib.getHashSha256(process.env.SECRET_KEY, 32);
const iv = process.env.IV;

const encryptData = (jsonPayload) => {
  const jsonString = JSON.stringify(jsonPayload).trim();
  console.log('🔐 JSON to Encrypt:\n', jsonString);
  const encrypted = CryptLib.encrypt(jsonString, key, iv);
  console.log('🔐 Encrypted Payload:\n', encrypted);
  return encrypted;
};

//const decryptData = (encryptedText) => {
 // const decrypted = CryptLib.decrypt(encryptedText, key, iv);
 // console.log('\n📥 Decrypted Response:\n', decrypted);



//};

function decryptData(encryptedText) {
  try {
    const decrypted = CryptLib.decrypt(encryptedText, key, iv);
    //console.log('\n📥 Decrypted Text:\n', decrypted);

    const parsed = JSON.parse(decrypted);
    console.log('\n📥 Parsed JSON:\n', parsed);
    return parsed;
  } catch (error) {
    console.error('❌ Error decrypting or parsing response:', error.message);
    return null;
  }
}

module.exports = {
  encryptData,
  decryptData
};
