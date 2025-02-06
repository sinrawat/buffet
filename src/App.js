// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import your components/pages
import Home from './pages/Home';
import Room from './pages/Room';
import Booking from './pages/Booking';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Menu */}
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">EASTIN GRAND HOTEL</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Room">Room Detail</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="Booking">Booking</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
