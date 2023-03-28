import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import MyContext from './MyContext';

function MyProvider({ children }) {
//   const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassWord = ({ target: { value } }) => {
    setPassword(value);
  };

  const value = useMemo(
    () => (
      {
        email,
        password,
        handleEmail,
        handlePassWord,
      }),
  );

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
