const { User } = require('../../database/models');

const login = async ({ email, _password }) => {
  const findUser = await User.findOne({
    where: { email },
  });
  console.log(findUser);
};

const register = async (data) => {
  const registerUser = await User.create(data);
  return registerUser;
};

module.exports = {
  login,
  register,
};