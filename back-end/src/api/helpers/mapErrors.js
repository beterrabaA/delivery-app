const errors = [
    { errorCode: 404, message: 'Not found' },
    { errorCode: 403, message: 'Passoword incorrect' },
    { errorCode: 409, message: 'Conflict' },
  ];
  
  const mapError = (message) => errors.find((m) => m.message.includes(message));

  module.exports = {
    mapError,
  };