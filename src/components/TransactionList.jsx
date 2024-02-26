import Transaction from "./Transaction";

const TransactionList = () => {
    return (
        <section className='new-transactions-section'>
            <h2>Transactions</h2>
            <ul className='new-transaction-list'>
                <Transaction />
                <Transaction />
                <Transaction />
            </ul>
        </section>
    )
}

export default TransactionList;