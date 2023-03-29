const loginService = require('../services/login.services');

const login = async (req, res) => {
  const data = req.body;
  const service = await loginService.login(data);

  if (service.errorCode) return res.status(service.errorCode).json({ message: service.message });

  return res.status(200).json(service);
};

module.exports = {
  login,
};