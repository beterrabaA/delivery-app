import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
// import Home from '../pages/home';

function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      {/* <Route exact path="/register" component={ Home } /> */}
    </Switch>
  );
}

export default Rotas;
