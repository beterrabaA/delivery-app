import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import contexto from '../context/MyContext';

function Login() {
  const { email, handleEmail, password, handlePassWord } = useContext(contexto);

  const stringEmail = /\S+@\S+\.\S+/;
  const limitador = 6;
  const able = stringEmail.test(email) && password.length >= limitador;

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
        onClick={ () => console.log('Register with success') }
      >
        Register
      </button>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

export default Login;
