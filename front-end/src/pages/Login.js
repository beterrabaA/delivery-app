import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import contexto from '../context/MyContext';

function Login() {
  // const [isLogged, setIsLogged] = useState(false);
  const [toRegister, setToRegister] = useState(false);
  const { email, handleEmail, password, handlePassWord } = useContext(contexto);

  const stringEmail = /\S+@\S+\.\S+/;
  const limitador = 6;
  const able = stringEmail.test(email) && password.length >= limitador;

  // const login = () => {
  //   setIsLogged(true);
  // };

  if (toRegister) {
    return <Navigate to="/register" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <input
        type="email"
        onChange={ handleEmail }
        value={ email }
        data-testid="common_login__input-email"
        placeholder="email"
      />
      <input
        type="password"
        onChange={ handlePassWord }
        value={ password }
        data-testid="common_login__input-password"
        placeholder="Password"
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ !able }
        onClick={ () => console.log('Login approved') }
      >
        Login
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => setToRegister(true) }
      >
        Register
      </button>
    </div>
  );
}

// Login.propTypes = {
//   history: PropTypes.shape(),
// }.isRequired;

export default Login;
