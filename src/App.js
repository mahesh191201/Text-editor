import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {

  const [mode, setmode] = useState('light');

  const togglemode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }



  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils1" mode={mode} togglemode={togglemode} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter your text" mode={mode} />}>
            </Route>
          </Routes>


        </div>
      </Router>

    </>

  );
}

export default App;
