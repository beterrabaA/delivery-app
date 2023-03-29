const errors = [
    { errorCode: 400, message: 'Some required fields are missing' },
  ];
  
  const mapError = (message) => errors.find((m) => m.message.includes(message));

  module.exports = {
    mapError,
  };