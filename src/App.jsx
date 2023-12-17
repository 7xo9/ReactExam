import React from 'react';
import Navbar from './Compnent/Navbar'
import Landing from './Compnent/Landing'
import Singin from './Compnent/Singin';
import Det from './Compnent/Det';
import Cart from './Compnent/Cart';
import Check from './Compnent/Check';


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
    <Navbar/>

    <Routes>
     <Route path="/" element={<Landing/>} />
     <Route path="/Singin" element={<Singin/>}/>
  
     <Route path="/Det">
        <Route path=":id" element={<Det />} />
      </Route>
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Check" element={<Check/>} />


    

    </Routes>


    </>
  )
}

export default App
