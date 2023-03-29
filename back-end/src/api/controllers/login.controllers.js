const { encode } = require('../../utils/token');

const loginService = require('../services/login.services');

const login = async (req, res) => {
  const data = req.body;
  const service = await loginService.login(data);
  
  return res.status(200).json(service);
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const encodedPassword = encode(password);
  console.log(encodedPassword);
  const service = await loginService.register({ name, email, password: encodedPassword });

  return res.status(201).json(service);
};

module.exports = {
  login,
  register,
};