import React, { useState } from "react";
import api from "../api";

function AddTransaction() {
  const [form, setForm] = useState({
    amount: "",
    description: "",
    category: "income",
  });

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
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  return (
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
  );
}

export default AddTransaction;  