/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from 'react';
import { toast } from 'react-toastify';

// Create a context
export const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
    // State for holding expense list and final amount
    const [list, setList] = useState([]);
    const [finalAmt, setFinalAmt] = useState(0);

    // Retrieve data from localStorage on component mount
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('expenseList'));
        const storedFinalAmt = JSON.parse(localStorage.getItem('finalAmt'));

        if (storedList) {
            setList(storedList);
        }

        if (storedFinalAmt) {
            setFinalAmt(storedFinalAmt);
        }
    }, []);

    // Function to save data to localStorage
    const handleSave = () => {
        localStorage.setItem('expenseList', JSON.stringify(list));
        localStorage.setItem('finalAmt', JSON.stringify(finalAmt));
        toast.success("Changes saved successfully!");
    }

    // Context value containing state and function to save data
    const contextValue = {
        list,
        setList,
        finalAmt,
        setFinalAmt,
        handleSave
    };

    // Provide the context value to the children
    return (
        <ExpenseContext.Provider value={contextValue}>
            {children}
        </ExpenseContext.Provider>
    );
};
