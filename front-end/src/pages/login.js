import React, { useContext } from 'react';

function Login() {
    // const { login } = useContext(AuthContext);

    const stringEmail = /\S+[@]\w+[.]\w+/gm;
    const limitador = 6;
    const able = (stringEmail.test(email) && password.length > limitador);

    return (
        <div>
            <h1>Login</h1>
            <input type="email" data-testid="common_login__input-email" placeholder="email" />
            <input
                type="password"
                data-testid="common_login__input-password"
                placeholder="Password" />
            <button
                data-testid="common_login__button-login"
                disabled={!able}
                onClick={console.log('foi')}>
                Login</button>
            <button
                data-testid="common_login__button-register"
                onClick={console.log('foi')}>
                Register</button>
        </div>
    );
}

export default Login;