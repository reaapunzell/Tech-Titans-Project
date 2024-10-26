// context/DataContext.js

import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <DataContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
