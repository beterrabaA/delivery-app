const { createHmac } = require('crypto');
const secret = require('./secret');

const encode = (data) => {
  const md5Hasher = createHmac('md5', secret);
  return md5Hasher.update(data).digest('hex');
};

module.exports = { encode };
