// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components/pages
import Bill from './pages/bill';
import Home from './pages/Home';
import Room from './pages/Room';
import logo from "./img/logo.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav class="navbar navbar-expand-lg custom-navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="/buffet"><img src={logo} alt="Logo" width="100"  />
            <span class="ms-3 size">จิ๊กโก๋..ชาบู</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto">
                {/* <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                  <span class="small-text">Home</span>
                  </a>
                </li> */}
                <li class="nav-item">
                  <a class="nav-link" href="Room">
                  <span class="small-text">Meet</span> 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Bill">
                  <span class="small-text">Bill</span> 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/buffet" element={<Home />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Bill" element={<Bill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;