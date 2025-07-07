import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

import Login from './Login';
import List from './Table';
import Put from './PutItem';
import Register from './Register';

function App() {
  // Alterar esse useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Inventory Controller';
  }, []);

  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css"/>

      <Router>
        <nav class="w3-bar">
          <div to="/" class="w3-bar-item w3-hover-indigo w3-button">
            <Link to="/register">
              Add
            </Link>
          </div>
          <div href="#" class="w3-bar-item w3-hover-indigo w3-button">
            <Link to="/list">
              Table
            </Link>
          </div>
          <div href="#" class="w3-bar-item w3-hover-indigo w3-button">
            <Link to="/">
              User
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/put/:id" element={<Put/>} />
          <Route path="/put" element={<Put/>} />
          <Route path="*" element={<Login/>} />
        </Routes>
      </Router>

      <footer class="w3-container">
        <p></p>
      </footer> 
    </div>
  );
}

export default App;
