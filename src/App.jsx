import { ExpenseProvider } from './context/ExpenseContext';
import ExpenseTracker from './components/ExpenseTracker';

const App = () => {
  return (
    <ExpenseProvider>
        <ExpenseTracker />
    </ExpenseProvider>
  );
};

export default App;

