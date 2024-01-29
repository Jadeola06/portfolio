import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Credits from './pages/Credits'



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/credits" exact element={<Credits />} />
      </Routes>
    </Router>
  );
};

export default App;
