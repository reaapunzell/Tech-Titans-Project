import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [month, setMonth] = useState('');
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [forecasts, setForecasts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cashFlow = parseFloat(income) - parseFloat(expenses);
        setForecasts([...forecasts, { month, income: parseFloat(income), expenses: parseFloat(expenses), cashFlow }]);
        setMonth('');
        setIncome('');
        setExpenses('');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">CASHZEN</h1>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="form-group">
                    <label htmlFor="month">Month:</label>
                    <input type="month" id="month" className="form-control" value={month} onChange={(e) => setMonth(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="income">Income:</label>
                    <input type="number" id="income" className="form-control" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="Enter income" required />
                </div>
                <div className="form-group">
                    <label htmlFor="expenses">Expenses:</label>
                    <input type="number" id="expenses" className="form-control" value={expenses} onChange={(e) => setExpenses(e.target.value)} placeholder="Enter expenses" required />
                </div>
                <button type="submit" className="btn btn-success btn-block">Add Forecast</button>
            </form>
            <div id="forecastTable">
                <h2 className="text-center">Forecast Summary</h2>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Month</th>
                            <th>Income</th>
                            <th>Expenses</th>
                            <th>Cash Flow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecasts.map((forecast, index) => (
                            <tr key={index}>
                                <td>{forecast.month}</td>
                                <td>{forecast.income.toFixed(2)}</td>
                                <td>{forecast.expenses.toFixed(2)}</td>
                                <td>{forecast.cashFlow.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
import React from 'react';
import HomePage from './homepage';

function App() {
    return (
        <div>
            <HomePage />
        </div>
    );
}

export default App;
