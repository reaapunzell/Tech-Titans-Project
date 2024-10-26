// components/CashFlowChart.js

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useData } from '../context/DataContext';

const CashFlowChart = () => {
    const { transactions } = useData();

    const monthlyData = transactions.reduce((acc, transaction) => {
        const month = new Date(transaction.date).toLocaleString('default', { month: 'short' });
        const amount = transaction.type === 'income' ? transaction.amount : -transaction.amount;
        acc[month] = (acc[month] || 0) + amount;
        return acc;
    }, {});

    const chartData = Object.entries(monthlyData).map(([month, amount]) => ({
        month,
        amount,
    }));

    return (
        <LineChart width={600} height={300} data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#4CAF50" />
        </LineChart>
    );
};

export default CashFlowChart;
