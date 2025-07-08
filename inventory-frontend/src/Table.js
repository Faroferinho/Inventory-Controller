import React, { useEffect } from 'react';
import './App.css';

function Table() {
    // Alterar esse useEffect para definir o título da página
      useEffect(() => {
        document.title = 'Inventory - Table';
      }, []);

    return (
        <div className="App">
            <table className="w3-table w3-border">
                <thead>
                    <tr className="w3-indigo">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>30</td>
                        <td>
                            <button className="w3-button w3-green">Edit</button>
                            <button className="w3-button w3-red">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>25</td>
                        <td>
                            <button className="w3-button w3-green">Edit</button>
                            <button className="w3-button w3-red">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Mike Johnson</td>
                        <td>40</td>
                        <td>
                            <button className="w3-button w3-green">Edit</button>
                            <button className="w3-button w3-red">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;