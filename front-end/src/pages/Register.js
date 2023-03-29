import React, { useState, useContext } from 'react';
import contexto from '../context/MyContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { validateRegister } = useContext(contexto);

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
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Register;
