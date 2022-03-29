
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

import Home from './Component/Home';
function App() {
  return (
    <div >
         <div>
      <div>
        <Navbar/>
  </div >
  <Routes>
    <Route path="/Home" element={<Home/>} />
  

  </Routes>
    </div>
   
    </div>
  );
}

export default App;
