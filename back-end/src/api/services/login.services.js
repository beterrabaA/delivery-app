const UserModel = require('../../database/models/user.model');

const login = async ({ email, _password }) => {
  const findUser = await UserModel.findOne({
    where: { email },
  });
  console.log(findUser);
};

module.exports = {
  login,
};