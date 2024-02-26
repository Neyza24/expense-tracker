import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";


const Transactions = () => {
    return (
        <div className='comments-container'>
            <TransactionList />
            <TransactionForm />
        </div>
    )
}

export default Transactions;