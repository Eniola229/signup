import './App.css';
import React from 'react';
import Registration from './Component/Registration';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home />} />
        <Route exact path="/Registration" element={<Registration />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
