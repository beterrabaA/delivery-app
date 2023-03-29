import React from 'react';
import './App.css';
import MyProvider from './context/MyProvider';
// import rockGlass from './images/rockGlass.svg';
import Rotas from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Rotas />
      </MyProvider>
    </div>
  );
}

export default App;
