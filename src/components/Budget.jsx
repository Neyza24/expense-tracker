import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBudget } from "../store/slices/budgetsSlice";
import { selectTransactions } from "../store/slices/transactionsSlice";


const Budget = ({ budget }) => {
    const dispatch = useDispatch();
    const transactions = useSelector(selectTransactions);

    const [amount, setAmount] = useState(budget.amount);

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(updateBudget({ category: budget.category, amount: amount }));
    };


    const calculateTotalExpenses = () => {
        return transactions[budget.category].map(transaction => transaction.amount).reduce((amount1, amount2) => amount1 + amount2, 0);
    }

    const getFundsRemainingClassName = (amount) => {
        if (parseFloat(amount) === 0) {
            return null;
        }

        return parseFloat(amount) > 0 ? 'positive' : 'negative';
    };

    const remainingFunds = Number.parseFloat(budget.amount - calculateTotalExpenses()).toFixed(2);
    const fundsRemainingClassName = getFundsRemainingClassName(remainingFunds);

    return (
        <li className='budget-container'>
            <div className='category-label'>Category:</div>{' '}
            <div className='category-wrapper'>
                <h3 className='category-value'>{budget.category}</h3>
                <form className='budget-form' onSubmit={handleEdit}>
                    <input
                        className='amount-input'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type='number'
                        step='0.01'
                    />
                    <button className='update-button'>Update</button>
                </form>
            </div>
            <h4 className={`remaining-funds ${fundsRemainingClassName}`}>
                Funds Remaining: {remainingFunds}
            </h4>
        </li>
    )
}

export default Budget;

/* eslint react/prop-types: 0 */