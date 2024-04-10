import { useState, useEffect } from 'react';

const ExpenseTracker = () => {
    const [list, setList] = useState([]);
    const [finalAmt, setFinalAmt] = useState(0);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    // Retrieve list and finalAmt from LocalStorage
    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('expenseList'));
        const storedFinalAmt = JSON.parse(localStorage.getItem('finalAmt'));

        console.log("Retrieved data from LocalStorage:", storedList, storedFinalAmt);

        if (storedList) {
            setList(storedList);
        }

        if (storedFinalAmt) {
            setFinalAmt(storedFinalAmt);
        }
    }, []);

    const handleClearInput = () => {
        // Clear the input fields
        setDescription('');
        setAmount('');
    };

    const handleAddIncome = () => {
        // Implement logic to add income

        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue)) {
            // Update total with the new amount
            setFinalAmt(finalAmt + amountValue);
        }
        const signAmount = "+" + amount;
        console.log(signAmount);
        setList([...list, { description, amount }]);
        handleClearInput();
        console.log('Income added');

    };

    const handleAddExpense = () => {
        // Implement logic to add expense

        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue)) {
            // Update total with the new amount
            setFinalAmt(finalAmt - amountValue);
        }
        const signAmount = "-" + amount;
        setList([...list, { description, amount }]);
        console.log(signAmount);
        handleClearInput();
        console.log('Expense added');
    }


    const handleReset = () => {
        setFinalAmt(0);
        setList([]);[]
    }

    const handleSave = () => {
        console.log("Saving data to LocalStorage:", list, finalAmt);
        localStorage.setItem('expenseList', JSON.stringify(list));
        localStorage.setItem('finalAmt', JSON.stringify(finalAmt));
    }

    // // Save list and finalAmt to LocalStorage
    // useEffect(() => {
    //     console.log("Saving data to LocalStorage:", list, finalAmt);
    //     localStorage.setItem('expenseList', JSON.stringify(list));
    //     localStorage.setItem('finalAmt', JSON.stringify(finalAmt));
    // }, [list, finalAmt]);

    return (
        <div className="w-screen p-6 bg-bgd text-code rounded shadow-md">
            <h1 className="text-2xl font-bold mb-1">Expense Tracker</h1>
            <div className="border border-secondary mb-3"></div>
            <div className="mb-4">
                <div className="">Total Amount:</div>
                <div className="text-2xl text-accent">₹{finalAmt}</div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="description">
                    Description:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="amount">
                    Amount:
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
                <button
                    className=" bg-secondary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddIncome}
                >
                    Income
                </button>
                <button
                    className="bg-primary text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleAddExpense}
                >
                    Expense
                </button>
                <button
                    className=" bg-green-800 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleSave}
                >
                    Save
                </button>
                <button
                    className=" bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={handleReset}
                >
                    Reset
                </button>

            </div>
            <div className="border border-secondary mb-3"></div>
            <div className="">
                <h1 className="text-2xl font-bold mt-1 mb-4 ">Transaction History</h1>
                <ul>
                    <div className='flex justify-between gap-3 px-2'>
                        <div>Description</div>
                        <div>Amount</div>
                    </div>
                    <div className="border border-white"></div>
                    {Array.from(list).map((entry, index) => (
                        <li key={index}>
                            <div className="border border-white"></div>
                            <div className='flex justify-between gap-3 px-2'>
                                <div>{entry.description}</div>
                                <div>{entry.amount}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpenseTracker;
