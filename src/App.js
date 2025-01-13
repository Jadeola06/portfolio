import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Credits from './pages/Credits'
import FourOFour from './pages/404';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/*" element={<FourOFour />} />
      </Routes>
    </Router>
  );
};

export default App;