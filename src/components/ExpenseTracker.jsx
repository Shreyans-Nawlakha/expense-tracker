import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling


const ExpenseTracker = () => {
    const [list, setList] = useState([]);
    {/* data structure = [
        {"desc":description,
         "amt":amt,
         "type":"income"}
    ]*/}

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
        // add check for empty fields
        if (description.trim() === '' || amount.trim() === '') {
            toast.error("Description or amount cannot be empty.");
            return;
            }
        // Implement logic to add income
        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue)) {
            // Update total with the new amount
            setFinalAmt(finalAmt + amountValue);
        }
        // create a new data variable to add the data along with type
        const newValue = {
            "desc": description,
            "amt": amount,
            "type": "income"
        }
        setList([...list, newValue]);
        handleClearInput();
        console.log('Income added');
        toast.success("Income added successfully!");
    };

    const handleAddExpense = () => {
        // add check for empty fields
        if (description.trim() === '' || amount.trim() === '') {
            toast.error("Description or amount cannot be empty.");
            return;
        }
        // Implement logic to add expense
        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue)) {
            // Update total with the new amount
            setFinalAmt(finalAmt - amountValue);
        }
        // create a new data variable to add the data along with type
        const newValue = {
            "desc": description,
            "amt": amount,
            "type": "expense"
        }
        setList([...list, newValue]);
        handleClearInput();
        console.log('Expense added');
        toast.success("Expense added successfully!");
    }


    const handleReset = () => {
        setFinalAmt(0);
        setList([]);
        toast.warn("All fields have been reset.");
        []
    }

    const handleSave = () => {
        console.log("Saving data to LocalStorage:", list, finalAmt);
        localStorage.setItem('expenseList', JSON.stringify(list));
        localStorage.setItem('finalAmt', JSON.stringify(finalAmt));
        toast.success("Changes saved successfully!");
    }

    return (
        <div className="max-w-screen xl p-6 bg-bgd text-code rounded shadow-md">
            <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
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
                            {/* <div className="w-2 h-6" style={{ backgroundColor: entry["type"] === "income" ? "green" : "red" }}></div> */}
                            <div className='flex justify-between gap-3 px-2'>
                                <div>{entry["desc"]}</div>
                                <div style={{ color: entry["type"] === "income" ? "green" : "red" }}>{entry["amt"]}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpenseTracker;
