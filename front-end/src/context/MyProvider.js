import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
// import {  } from 'react-router-dom';
import MyContext from './MyContext';

function MyProvider({ children }) {
  // const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassWord = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleName = ({ target: { value } }) => {
    setName(value);
  };

  const validateRegister = (namR, emailR, pass) => {
    const stringEmail = /\S+@\S+\.\S+/;
    const limitador = 6;
    const nL = 12;
    const able = stringEmail.test(emailR) && pass.length >= limitador && namR.length > nL;
    return able;
  };

  const value = useMemo(() => (
    {
      email,
      password,
      name,
      handleEmail,
      handlePassWord,
      handleName,
      validateRegister,
    }), [email, name, password]);

  return (
    <MyContext.Provider value={ value }>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape(),
}.isRequired;

export default MyProvider;
