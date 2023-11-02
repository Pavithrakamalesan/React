import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compontent4/Home';
import Contact from './compontent4/Contactus';
import Navigation from './Navigation/Navigation';
import About from './compontent4/About';
import Objective from './compontent4/Objective';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />}></Route>
          <Route path="/objective" element={<Objective />}></Route>
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;