import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import contexto from '../context/MyContext';

function Login() {
  const { email, handleEmail, password, handlePassWord } = useContext(contexto);
  const [elemErr, setElemErr] = useState(false);

  const stringEmail = /\S+@\S+\.\S+/;
  const limitador = 6;
  const able = stringEmail.test(email) && password.length >= limitador;

  const navigate = useNavigate();
  const validateLogin = async () => {
    const CODE_NOT_FOUND = 404;
    const api = axios.create({
      baseURL: 'http://localhost:3001',
    });

    await api.post('/login', { email, password })
      .then((response) => {
        console.log('dentsso', response.data);
        navigate('/customer/products');
      })
      .catch((error) => {
        if (error.response.status === CODE_NOT_FOUND) return setElemErr(true);
      });
  };

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
        onClick={ validateLogin }
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
      {
        elemErr
        && <p data-testid="common_login__element-invalid-email"> </p>
      }
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape(),
}.isRequired;

export default Login;
