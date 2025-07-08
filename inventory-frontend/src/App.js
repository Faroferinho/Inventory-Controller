import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

import Login from './Login';
import List from './Table';
import Put from './PutItem';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css"/>

      <Router>
        <nav class="w3-bar">
          <div href="#" to="/" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
            <Link to="/put">
              Add
            </Link>
          </div>
          <div href="#" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
            <Link to="/list">
              Table
            </Link>
          </div>
          <div href="#" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
            <Link to="/login">
              User
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/list" element={<List/>} />
          <Route path="/put" element={<Put/>} />
          <Route path="*" element={<Login/>} />
        </Routes>
      </Router>

      <footer class="w3-container">
        <p>A basic Inventory, Stock and Purchase management system</p>
      </footer> 
    </div>
  );
}

export default App;
