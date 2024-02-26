import { useDispatch } from "react-redux";
import { deleteTransaction } from "../store/slices/transactionsSlice";

const Transaction = ({transaction}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTransaction(transaction))
    };

    return (
        <li className='new-transaction'>
            <span>
                {transaction.amount} - {transaction.category} {' '}
                <span className='description'>({transaction.description})</span>
            </span>
            <button onClick={handleDelete} aria-label='Remove'>X</button>
        </li>
    )
}

export default Transaction;

/* eslint react/prop-types: 0 */