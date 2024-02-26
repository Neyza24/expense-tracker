import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../dataCategories';


const initialState = CATEGORIES.map((category) => (
    {
        category: category,
        amount: 0
    }
)
); 

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: initialState,
    reducers: {
        updateBudget: (state, action) => {
            const { category, amount } = action.payload;

            const newBudget = state.find(budget => budget.category === category);

            if (newBudget) {
                newBudget.amount = amount;
            }
        },
    }
});

export const { updateBudget } = budgetsSlice.actions;
export const selectBudgets = (state) => state.budgets;