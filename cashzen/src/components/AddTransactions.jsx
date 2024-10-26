import React, { useState, useEffect } from "react";
import api from "../api";

function AddTransaction() {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    category: "income",
  });

  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await api.post("/transactions", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Transaction added successfully!");
      fetchTransactions();
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  // Fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await api.get("/transactions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(response.data);
    } catch (err) {
      console.error("error fetching transactions", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <select name="category" onChange={handleChange}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>

      <h3>Your Transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id}>
            <strong>Amount:</strong> {transaction.amount} |{" "}
            <strong>Description:</strong> {transaction.description} |{" "}
            <strong>Category:</strong> {transaction.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTransaction;
