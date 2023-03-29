const errors = [
    { errorCode: 404, message: 'Not found' },
    { errorCode: 403, message: 'Passoword incorrect' },
  ];
  
  const mapError = (message) => errors.find((m) => m.message.includes(message));

  module.exports = {
    mapError,
  };