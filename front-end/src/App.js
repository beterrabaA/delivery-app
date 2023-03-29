import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <Home /> } />
      <Route path="/:null" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
