import { useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';


// Custom hook to use the expense context
export const useExpense = () => useContext(ExpenseContext);
