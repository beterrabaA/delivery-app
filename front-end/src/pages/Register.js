import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import contexto from '../context/MyContext';

function Register() {
  const { validateRegister } = useContext(contexto);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [elemErr, setElemErr] = useState(false);

  const navigate = useNavigate();

  const validateLogin = async () => {
    const CODE_NOT_FOUND = 409;
    const api = axios.create({
      baseURL: 'http://localhost:3001',
    });

    await api.post('/register', { name, email, password })
      .then(() => {
        navigate('/customer/products');
      })
      .catch((error) => {
        if (error.response.status === CODE_NOT_FOUND) return setElemErr(true);
      });
  };

  return (
    <div>
      <input
        type="text"
        onChange={ ({ target: { value } }) => setName(value) }
        value={ name }
        data-testid="common_register__input-name"
        placeholder="Nome"
      />
      <input
        type="email"
        onChange={ ({ target: { value } }) => setEmail(value) }
        value={ email }
        data-testid="common_register__input-email"
        placeholder="Email"
      />
      <input
        type="password"
        onChange={ ({ target: { value } }) => setPassword(value) }
        value={ password }
        data-testid="common_register__input-password"
        placeholder="Senha"
      />
      <button
        data-testid="common_register__button-register"
        type="button"
        disabled={ !validateRegister(name, email, password) }
        onClick={ validateLogin }
      >
        Cadastrar
      </button>
      {
        elemErr
        && <p data-testid="common_register__element-invalid_register"> </p>
      }
    </div>
  );
}

export default Register;
