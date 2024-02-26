const Transaction = () => {
    return (
        <li className='new-transaction'>
            <span>
                transaction amount - transaction category {' '}
                <span className='description'>(transaction description)</span>
            </span>
            <button onClick='handleDelete' aria-label='Remove'>X</button>
        </li>
    )
}

export default Transaction;