import React, { useEffect } from 'react';
import './Login.css';

function App() {
  // Alterar esse useEffect para definir o título da página
  useEffect(() => {
    document.title = 'Inventory - Register Item';
  }, []);

  return (
    <div className="App">
      <form className="w3-container w3-card-4 w3-margin w3-round-xlarge">
        <p className='w3-center h2'>Register Item</p>
        
        <div className="w3-section w3-padding-16">
          <label className="fixright" htmlFor="itemName">
            Item Name:
          </label>
          <input className="w3-input w3-border w3-round-xxlarge" type="text" name="itemName" required />
        </div>
        
        <div className="w3-section w3-padding-16">
          <label className="fixright" htmlFor="quantity">
            Quantity:
          </label>
          <input className="w3-input w3-border w3-round-xxlarge" type="number" name="quantity" required />
        </div>

        <div className="w3-section w3-padding-16">
          <label className="fixright">
            Price:
          </label>
          <input className="w3-input w3-border w3-round-xxlarge" type="number" name="price" step="0.01" required />
        </div>
        
        <div className="w3-section">
          <input class="w3-check" type="checkbox" name="available" />
          <label className="fixright">
            Available:
          </label>
        </div>
        
        <button className="w3-button w3-right w3-indigo w3-margin-top w3-margin-bottom w3-round-xlarge" type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
