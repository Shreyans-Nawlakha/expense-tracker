import { useExpense } from '../context/expenseHooks';

const Transaction = () => {
    const { list } = useExpense();

    return (
        <div>
            {/* Your Transaction component JSX */}
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
    );
};

export default Transaction;

