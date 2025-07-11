import { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';

import Login from './Login';
import List from './Table';
import Put from './PutItem';
import Register from './Register';

const API_URL = "http://localhost:8080/api/v1/item/"; // URL of the API

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    value: '',
    quantity: '',
    available: false,
  });
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
      fetch(API_URL)
      .then((res)  => res.json())
      .then((data) => setItems(data));
    }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('API data:\n', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:\n', error);
    }
  };

  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css"/>

      <Router>
        <nav class="w3-bar">
          <Link to="/put">
            <div href="#" to="/" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
              Add
            </div>
          </Link>
          <Link to="/list">
            <div href="#" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
              Table
            </div>
          </Link>
          <Link to="/login">
            <div href="#" class="w3-bar-item w3-hover-indigo w3-button w3-border w3-border-deep-purple">
              User
            </div>
          </Link>
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
        <p className='w3-text-grey'>A basic Inventory, Stock and Purchase management system</p>
        <p className='w3-text-grey'>Developed by <a href="https://www.linkedin.com/in/conrado-perini-fracacio-b89889211/" className='w3-text-indigo'>Conrado</a>, for more projects like this here is my <a href=" https://github.com/Faroferinho" className='w3-text-indigo'>Repositories</a></p>
        <p className='w3-text-grey'>For more contact options email me at rpjolasunited@gmail.com</p>
      </footer> 
    </div>
  );
}

export default App;
