import React, { useEffect, useState } from 'react';
import './App.css';

function Table() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    
    useEffect(() => {
        document.title = 'Inventory - Table';
        getItems();
    }, []);

    const getItems = async () => {
        setLoading(true);
        
        const response = await fetch("http://localhost:8080/api/v1/item/");

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('items', JSON.stringify(data));
            setItems(data);
            setError(null);
        }else {
            setError('Failed to fetch items');
        }
        setLoading(false);
    };

    const handleEdit = (item) => {
        localStorage.setItem('editingItem', JSON.stringify(item));
        window.location.href = '/put'; // Redirect to the PutItem page for editing
    }

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8080/api/v1/item/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            alert('Item deleted successfully!');
            getItems(); // Refresh the item list after deletion
        }
        else {
            alert('Failed to delete item. Please try again.');
        }
    }

    return (
        <div className="App">
            {loading && <div className="w3-container w3-center"><p>Loading items...</p></div>}
            {error && <div className="w3-container w3-red"><p>{error}</p></div>}
            <table className="w3-table w3-border">
                <thead>
                    <tr className="w3-indigo">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.value}</td>
                            <td>{item.quantity}</td>
                            <td>{item.available ? 'Yes' : 'No'}</td>
                            <td>
                                <button className="w3-button w3-indigo w3-round-xlarge" onClick={() => handleEdit(item)}>Edit</button>
                                <button className="w3-button w3-red w3-round-xlarge" onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;