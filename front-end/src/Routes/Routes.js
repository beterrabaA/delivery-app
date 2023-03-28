import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/login';

function Rotas() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/login" component={Login} />
        </Switch>
    );
}

export default Rotas;