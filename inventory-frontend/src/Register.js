import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Register() {
    // Alterar esse useEffect para definir o título da página
    useEffect(() => {
        document.title = 'Inventory - SignUp';
    }, []);

    return (
        <div className="App">
            <form className="w3-container w3-card-4 w3-margin w3-round-xlarge">
                <h2 className="w3-center">Register</h2>

                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="name">Name</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="text" id="name" name="name" required />
                </div>
                
                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="email">Email</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="email" id="email" name="email" required />
                </div>
                
                <div className="w3-section w3-padding-16">
                    <label className="fixright" htmlFor="password">Password</label>
                    <input className="w3-input w3-border w3-round-xxlarge" type="password" id="password" name="password" required />
                </div>
                
                <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge">Submit</button>
            </form>

            <p className="w3-right w3-text-grey">Already had an account? <Link to="/">Login</Link></p>
        </div>
    );
}

export default Register;