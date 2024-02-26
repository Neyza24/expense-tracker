

const Budget = () => {
    return (
        <li className='budget-container'>
            <div className='category-label'>Category:</div>{' '}
            <div className='category-wrapper'>
                <h3 className='category-value'>budget category</h3>
                <form className='budget-form' onSubmit='handleSubmit'>
                    <input 
                        className='amount-input'
                        value='amount'
                        type='number'
                        step='0.01'
                    />
                    <button className='update-button'>Update</button>
                </form>
            </div>
        </li>
    )
}

export default Budget;