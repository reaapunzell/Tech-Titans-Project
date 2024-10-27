import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AddTransaction from './components/AddTransactions';
import TransactionList from './components/TransactionList';

function App() {
    return (
        <Router>
            <div>
                <h1>Cashzen</h1>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-transaction" element={<AddTransaction />} />
                    <Route path="/transactions/:userId" element={<TransactionList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;