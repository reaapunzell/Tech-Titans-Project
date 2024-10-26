import React, {useEffect, useState } from 'react';
import api from '../api';

function TransactionList(){
    const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        const fetchTransactions = async () =>{
            const token = localStorage.getItem('token');
            try{
                const response = await api.get('/transactions',{
                    headers: {Authorization: `Bearer ${token}`}
                });
                setTransactions(response.data);
            }catch (error){
                console.error('Error fetching transactions:', err);
            }
        };
        
        fetchTransactions();
    }, []);

    return (
        <div>
        <h2>Your Transactions</h2>
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