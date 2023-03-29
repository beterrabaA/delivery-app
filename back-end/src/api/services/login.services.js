const { User } = require('../../database/models');

const login = async ({ email, password }) => {
  const findUser = await User.findOne({
    where: { email },
  });
  console.log(findUser);
};

module.exports = {
  login,
};