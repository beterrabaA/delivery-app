const md5 = require('md5');
const { User } = require('../../database/models');
const { mapError } = require('../helpers/mapErrors');

const login = async ({ email, password }) => {
  const passwordCrypter = md5(password);
  const findUser = await User.findOne({
    where: { email, password: passwordCrypter },
    attributes: { exclude: ['createdAt', 'updatedAt', 'password'] },
  });
  
  if (!findUser) return mapError('Not found');

  return findUser;
};

module.exports = {
  login,
};