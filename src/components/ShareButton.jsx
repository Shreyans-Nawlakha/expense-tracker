// import React from 'react'
import { IoMdShare } from "react-icons/io";
import { useExpense } from "../context/expenseHooks";
import { toast } from "react-toastify";
const ShareButton = () => {
    const { list } = useExpense();
    const transaction = list;
    const formatTransactionsAsText = (TransactionHistory) => {
        return TransactionHistory.map(tx => {
            const sign = tx.type === 'income' ? '+' : '-';
            return `${sign}${tx.amt} => ${tx.desc}`;
          }).join('\n');
    };
    const handleShare = () => {
        const transactionText = formatTransactionsAsText(transaction);

        if (navigator.share) {
            navigator.share({
                title:'Transaction History',
                text: transactionText
            })
                .then(() => console.log('Successful share'))
                .catch(error => toast.error('Error sharing', error));
        } else {
            // Fallback to copy to clipboard
            navigator.clipboard.writeText(transactionText)
                .then(() => alert('Transaction history copied to clipboard'))
                .catch(err => console.error('Error copying to clipboard', err));
        }
    }
    return (
        <div>
            <button onClick={handleShare}>
                <IoMdShare />
            </button>
        </div>
    )
}

export default ShareButton
