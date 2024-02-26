import { useSelector } from 'react-redux';
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import { selectFlattenedTransactions } from "../store/slices/transactionsSlice";


const Transactions = () => {

    const transactions = useSelector(selectFlattenedTransactions);

    return (
        <div className='comments-container'>
            <TransactionList transactions={transactions}/>
            <TransactionForm />
        </div>
    )
}

export default Transactions;