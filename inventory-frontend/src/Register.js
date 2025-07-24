import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_USERS_URL } from './App'; // Import the API URL for users
import './Login.css';

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    // Alterar esse useEffect para definir o título da página
    useEffect(() => {
        document.title = 'Inventory - SignUp';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        console.log("Form:\n", form);

        e.preventDefault();
        
        fetch(API_USERS_URL + "register/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }).catch(error => {
            console.error('Error during registration:', error);
            // Handle registration error, e.g., show an error message
        });

        navigate('/user');
    };

    return (
        <div className="App">
            <form className="w3-container w3-card-4 w3-margin w3-round-xlarge">
                <h2 className="w3-center">Register</h2>

                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="name">Name</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="text" id="name" name="name" onChange={handleChange} required />
                </div>
                
                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="email">Email</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="email" id="email" name="email" onChange={handleChange} required />
                </div>
                
                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="password">Password</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="password" id="password" name="password" onChange={handleChange} required />
                </div>
                
                <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge" onClick={handleSubmit}>Submit</button>
            </form>

            <p className="w3-right w3-text-grey">Already had an account? <Link to="/">Login</Link></p>
        </div>
    );
}

export default Register;