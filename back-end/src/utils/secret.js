const { readFileSync } = require('fs');

const secret = readFileSync(`${__dirname}/../../../jwt.evaluation.key`, 'utf8');

module.exports = secret;