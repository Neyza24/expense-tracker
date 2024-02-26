import {useSelector} from 'react-redux';
import { selectBudgets } from '../store/slices/budgetsSlice';
import Budget from "../components/Budget";


const Budgets = () => {
    const budgets = useSelector(selectBudgets);

    return (
        <ul className='comments-container'>
            {
                budgets.map( budget => <Budget key={budget.category} budget={budget}/>)
            }
        </ul>
    )
}

export default Budgets;