const TransactionForm = () => {
    return (
        <section>
            <h2 className='new-transaction-section'>New Transaction</h2>
            <form onSubmit='handleSubmit'>
                <div className='form-wrapper'>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <select
                            id='category'
                            value='category'
                        >
                            <option>category 1</option>
                            <option>category 2</option>
                            <option>category 3</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor='description'>Description</label>
                        <input 
                            id='description'
                            value='description'
                            type='text'
                        />
                    </div>

                    <div>
                        <label htmlFor='amout'>Amout</label>
                        <input 
                            id='amount'
                            value='amount'
                            type='number'
                            step='0.1'
                        />
                    </div>
                </div>
                <button>Add Transaction</button>
            </form>
        </section>
    )
}

export default TransactionForm;