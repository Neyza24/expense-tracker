import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = [
    "housing",
    "food",
    "transportation",
    "utilities",
    "clothing",
    "healthcare",
    "personal",
    "education",
    "entertainment",
];

const initialState = CATEGORIES.map((category) => (
    {
        category: category,
        amount: 0
    }
)
); // output this logic [{category: 'perosnal', amount: 0}, {category: 'food', amount: 0}, ...]

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: initialState,
    reducers: {
        updateBudget: (state, action) => {
            const { category, amount } = action.payload;

            const newBudget = state.find(budget => budget.category === category);

            if (newBudget && newBudget > 0) {
                newBudget.amount = amount;
            }
        },
    }
});

export const { updateBudget } = budgetsSlice.actions;