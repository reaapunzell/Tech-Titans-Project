// components/Dashboard.js

import TransactionForm from './TransactionForm';
import CashFlowChart from './CashFlowChart';

const Dashboard = () => (
    <div className="dashboard">
        <h2>Cash Flow Forecast</h2>
        <TransactionForm />
        <CashFlowChart />
    </div>
);

export default Dashboard;
