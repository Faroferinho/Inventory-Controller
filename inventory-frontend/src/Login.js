import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Login.css';

import { API_USERS_URL } from './App'; // Import the API URL for users

function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const [redirect, setRedirect] = useState(false);

    const navigate = useNavigate();

    // Alterar esse useEffect para definir o título da página
    useEffect(() => {
        document.title = 'Inventory - Login';
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
        console.log("URL:", API_USERS_URL + "login/");

        e.preventDefault();
        
        fetch(API_USERS_URL + "login/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then(response => {
            if (response.ok) {
                localStorage.setItem('user', response.headers.get('Authorization'));
                setRedirect(true);
                navigate('/user'); // Redirect to user profile after successful login
            } else {
                throw new Error('Login failed');
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            // Handle login error, e.g., show an error message
        })
    };

    return (
        <div className="App">
            <form className="w3-container w3-card-4 w3-margin w3-round-xlarge">
                <p className="w3-center h2">Login</p>
                
                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="username">
                        User
                    </label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="text" id="username" name="username" onChange={handleChange} required/>
                </div>

                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="password">
                        Password
                    </label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="password" id="password" name="password" onChange={handleChange} required/>
                </div>
                
                <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge" onClick={handleSubmit}>Login</button>
            </form>
            <p className="w3-right w3-text-grey">Still don't have an account? <Link to="/register">Sign-Up</Link></p>
        </div>
    );
}

export default Login;
