import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import { Routes, Route } from "react-router-dom";
import '../src/assets/images/Hero-bg.png'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export default App;