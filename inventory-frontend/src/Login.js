import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="App">
        <form className="w3-container w3-card-4 w3-margin w3-round-xlarge">
            <h2 className="w3-center">Login</h2>
            
            <div className="w3-section w3-padding-16">
                <label className="fixright" htmlFor="username">
                    User
                </label>
                <input className="w3-input w3-border w3-round-xxlarge" type="text" id="email" name="email" required/>
            </div>

            <div className="w3-section w3-padding-16">
                <label className="fixright" htmlFor="password">
                    Password
                </label>
                <input className="w3-input w3-border w3-round-xxlarge" type="password" id="password" name="password" required/>
            </div>
            
            <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge">Login</button>
        </form>
        <p className="w3-right w3-text-grey">Still don't have an account? <Link to="/register">Sign-Up</Link></p>
    </div>
  );
}

export default Login;
