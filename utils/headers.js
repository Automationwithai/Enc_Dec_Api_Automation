require('dotenv').config();

module.exports = {
  defaultHeaders: {
    'Content-Type': 'text/plain',
    'api-key': process.env.API_KEY
  }
};
