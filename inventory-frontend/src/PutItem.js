import React, { use, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';
import { API_ITEMS_URL } from './App';
import './Login.css';

function PutItem() {
  const [form, setForm] = useState({
    name : "",
    description : "",
    value : 0,
    quantity : 0,
    available : false
  });
  const [editing, setEditing] = useState(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const isEditing = Boolean(id);

  // Alterar esse useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Inventory - Register Item';
    if (isEditing) {
      fetchItem(id);
    }
  }, []); // Dependências do useEffect

  const handleSubmit = async (e) => { // <--- Adicione 'e' aqui
    e.preventDefault(); // <--- Adicione esta linha no início

    const newItem = form;
    const method = editing ? "PUT" : "POST";

    console.log('Submitting item:', JSON.stringify(newItem));

    const response = await fetch(API_ITEMS_URL + (id || ''), {
      method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newItem)
    });

    if(response.ok){
      setEditing(null);
      setForm({
        name: "",
        description: "",
        value: 0.0,
        quantity: 0,
        available: false,
      });
      alert('Item registered successfully!');
      window.location.href = '/list'; // Redirect to the list page after successful registration
    }else{
      alert('Failed to register item. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : (type === 'number' ? parseFloat(value) : value),
    }));
  };

  const fetchItem = async (id) => {
    try {
      const response = await fetch(`${API_ITEMS_URL}${id}`);
      if (response.ok) {
        const data = await response.json();
        setForm({
          name: data.name,
          description: data.description,
          value: data.value,
          quantity: data.quantity,
          available: data.available,
        });
        setEditing(data.id);
      } else {
        alert('Failed to fetch item details. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching item:', error);
      alert('Error fetching item details. Please try again.');
    }
  };

  return (
    <div className="App">
      <div className="w3-container w3-padding-64 w3-margin">
        <form className="w3-container w3-card-4 w3-margin w3-round-xlarge" onSubmit={handleSubmit}>
          <p className='w3-center h2'>Register Item</p>
          
          <div className="w3-section w3-padding-16">
            <label className="fixright" htmlFor="itemName">
              Item Name:
            </label>
            <input className="w3-input w3-border w3-round-xxlarge" placeholder='Name' type="text" name="name" required  value={form.name} onChange={(e) => handleChange(e)} />
          </div>

          <div className="w3-section w3-padding-16">
            <label className="fixright" htmlFor="itemName">
              Description:
            </label>
            <input className="w3-input w3-border w3-round-xxlarge" placeholder='Description' type="text" name="description" required value={form.description} onChange={(e) => handleChange(e)} />
          </div>
          
          <div className="w3-section w3-padding-16">
            <label className="fixright" htmlFor="quantity">
              Quantity:
            </label>
            <input className="w3-input w3-border w3-round-xxlarge" placeholder={form.quantity} type="number" name="quantity" required value={form.quantity} onChange={(e) => handleChange(e)} />
          </div>

          <div className="w3-section w3-padding-16">
            <label className="fixright">
              Price:
            </label>
            <input className="w3-input w3-border w3-round-xxlarge" placeholder={form.value} type="number" name="value" step="0.01" required value={form.value} onChange={(e) => handleChange(e)} />
          </div>
          
          <div className="w3-section">
            <label className="align" htmlFor="available">
              Available:
            </label>
            <input className="w3-check" type="checkbox" name="available" value={form.available} onChange={(e) => handleChange(e)} />
          </div>
          
          <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge" type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}

export default PutItem;
