import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'
import api from '../api';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId'); 

      if (!token || !userId) {
        setError("User not authenticated.");
        return;
      }

      try {
        const response = await api.get(`/transactions/${userId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError("Failed to fetch transactions. Please try again later.");
      }
    };

    fetchTransactions();
  }, []);


  
  return (
    <div>
      <h2>Your Transactions</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            {transaction.date} - {transaction.description}: R{transaction.amount} ({transaction.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
