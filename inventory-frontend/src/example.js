import React, { useState, useEffect, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:8080/api/items'; // Sua API

function ItensTable() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  // Função para buscar os itens da API
  const fetchItems = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data); // Atualiza o estado, o que re-renderiza a tabela
    } catch (e) {
      console.error("Erro ao buscar itens:", e);
      setError("Não foi possível carregar os itens.");
    } finally {
      setLoading(false);
    }
  }, []); // Sem dependências, pois só buscamos na montagem ou quando solicitado

  // Efeito para carregar os itens na montagem do componente
  useEffect(() => {
    fetchItems();
  }, [fetchItems]); // fetchItems é uma dependência, use useCallback para evitar loop infinito

  // Adicionar um novo item
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (newItemName.trim() === '') {
      setMessage('O nome do item não pode ser vazio.');
      return;
    }

    setMessage('Adicionando item...');
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItemName }), // Assumindo que o backend espera um objeto { name: "..." }
      });
      if (!response.ok) {
        throw new Error('Falha ao adicionar item.');
      }
      const addedItem = await response.json(); // O backend pode retornar o item com ID
      setItems(prevItems => [...prevItems, addedItem]); // Atualiza localmente
      setNewItemName(''); // Limpa o input
      setMessage('Item adicionado com sucesso!');
    } catch (err) {
      console.error("Erro ao adicionar item:", err);
      setMessage(`Erro: ${err.message}`);
    }
  };

  // Deletar um item
  const handleDeleteItem = async (id) => {
    setMessage('Deletando item...');
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Falha ao deletar item.');
      }
      setItems(prevItems => prevItems.filter(item => item.id !== id)); // Atualiza localmente
      setMessage('Item deletado com sucesso!');
    } catch (err) {
      console.error("Erro ao deletar item:", err);
      setMessage(`Erro: ${err.message}`);
    }
  };

  if (loading) return <p>Carregando itens...</p>;
  if (error) return <p style={{ color: 'red' }}>Erro: {error}</p>;

  return (
    <div>
      <h2>Lista de Itens</h2>
      {message && <p style={{ color: 'blue' }}>{message}</p>}

      <form onSubmit={handleAddItem}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Nome do novo item"
        />
        <button type="submit">Adicionar Item</button>
      </form>

      {items.length === 0 ? (
        <p>Nenhum item cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => handleDeleteItem(item.id)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ItensTable;