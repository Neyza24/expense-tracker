import { useDispatch } from "react-redux";

import uuid from 'react-uuid';
import { addTransaction } from "../store/slices/transactionsSlice";
import { useState } from "react";
import { CATEGORIES } from "../store/dataCategories";

const TransactionForm = () => {

    const dispatch = useDispatch();

    const [category, setCategory] = useState(CATEGORIES[0]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addTransaction({
                category: category,
                description: description,
                amount: parseFloat(amount),
                id: uuid(),
            })
        );
        setCategory(CATEGORIES[0]);
        setDescription('');
        setAmount(0);
    };

    return (
        <section className='new-transaction-section'>
            <h2>New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-wrapper'>
                    <div>
                        <label htmlFor='category'>Category</label>
                        <select
                            id='category'
                            value={category}
                            onChange={(e) => setCategory(e.currentTarget.value)}
                        >
                            {
                                CATEGORIES.map(c => (
                                    <option
                                        key={c}
                                        value={c}
                                    >
                                        {c}
                                    </option>
                                ))
                            }


                        </select>
                    </div>

                    <div>
                        <label htmlFor='description'>Description</label>
                        <input
                            id='description'
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                            type='text'
                        />
                    </div>

                    <div>
                        <label htmlFor='amout'>Amount</label>
                        <input
                            id='amount'
                            value={amount}
                            onChange={(e) => setAmount(e.currentTarget.value)}
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