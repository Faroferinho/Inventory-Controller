import { useState } from 'react';

function User() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const [redirect, setRedirect] = useState(false);

    return (
        <div className="w3-container w3-card-4 w3-margin w3-round-xlarge">
            <p className="h2">{!redirect ? user : "User Profile"}</p>
            <p className="w3-center">This is the user profile page.</p>
            {/* Additional user profile content can be added here */}
        </div>
    );
}

export default User;