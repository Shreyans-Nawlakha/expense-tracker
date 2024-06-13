import { useExpense } from '../context/expenseHooks';
import ShareButton from './ShareButton';

const Transaction = () => {
    const { list } = useExpense();

    return (
        <div>
            {/* Your Transaction component JSX */}
            <div className='mt-1 mb-4 flex items-center justify-between'>
            <div className="text-2xl font-bold ">Transaction History</div>
            <div className="text-2xl font-bold pt-2 "><ShareButton /></div>
            </div>
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

