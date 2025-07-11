import React, { useEffect } from 'react';
import './App.css';

function Table() {
    // Alterar esse useEffect para definir o título da página
    useEffect(() => {
        document.title = 'Inventory - Table';
    }, []);

    const listItems = localStorage.getItem('items');
    const items = listItems ? JSON.parse(listItems) : [];

    return (
        <div className="App">
            <table className="w3-table w3-border">
                <thead>
                    <tr className="w3-indigo">
                        <th>ID</th>
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
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.value}</td>
                            <td>{item.quantity}</td>
                            <td>{item.available ? 'Yes' : 'No'}</td>
                            <td>
                                <button className="w3-button w3-indigo w3-round-xlarge">Edit</button>
                                <button className="w3-button w3-red w3-round-xlarge">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;