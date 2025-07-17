import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { API_URL } from './App';

function Table() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    const navigate = useNavigate();
    
    const getItems = useCallback(async () => {
        setLoading(true);
        
        try {
            const response = await fetch(API_URL);

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('items', JSON.stringify(data));
                setItems(data);
                setError(null);
            }else {
                setError('Failed to fetch items');
                throw new Error('Failed to fetch items');
            }
        }catch (err) {
            setError(err.message);
        }finally {
            setLoading(false);
        }
    }, []);

    const handleEdit = (id) => {
        navigate(`/put/${id}`);
    };

    const handleDelete = async (id) => {
        const response = await fetch(`http://localhost:8080/api/v1/item/${id}`, {
            method: 'DELETE',
        });
        try {
            if (response.ok) {
                alert('Item deleted successfully!');
                setItems(prevItems => prevItems.filter(item => item.id !== id));
            }
            else {
                alert('Failed to delete item. Please try again.');
                setError('Failed to delete item');
                console.error('Error deleting item:', response.statusText);
                throw new Error('Failed to delete item');
            }
        } catch (err) {
            setError(err.message);
            console.error('Error deleting item:', err);
        }
    };

    useEffect(() => {
        document.title = 'Inventory - Table';
        getItems();
    }, [getItems]);

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
                                <button className="w3-button w3-indigo w3-round-xlarge" onClick={() => handleEdit(item.id)}>Edit</button>
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