// components/TransactionForm.js

import { useState } from 'react';
import { useData } from '../context/DataContext';

const TransactionForm = () => {
    const { addTransaction } = useData();
    const [formData, setFormData] = useState({
        date: '',
        amount: '',
        type: 'income',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.date || !formData.amount) return;

        addTransaction({
            ...formData,
            amount: parseFloat(formData.amount),
        });
        setFormData({ date: '', amount: '', type: 'income' });
    };

    return (
        <form onSubmit={handleSubmit} className="transaction-form">
            <label>
                Date:
                <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                />
            </label>
            <label>
                Amount:
                <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                />
            </label>
            <label>
                Type:
                <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                >
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
