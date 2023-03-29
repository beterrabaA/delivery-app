import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
