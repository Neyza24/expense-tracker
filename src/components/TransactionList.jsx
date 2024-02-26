import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
    return (
        <section className='new-transactions-section'>
            <h2>Transactions</h2>
            <ul className='new-transaction-list'>
            {transactions.map((t) => (
          <Transaction transaction={t} key={t.id} />
        ))}
            </ul>
        </section>
    )
}

export default TransactionList;

/* eslint react/prop-types: 0 */