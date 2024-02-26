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

//transactions: { housing: [{category: 'housing', description: 'text', amount: 300, id: 123},...], food: [{category: 'food', description: 'text', amount: 300, id: 123}, {}, {}]}

const initialState = Object.fromEntries(CATEGORIES.map( category => [category, []]));

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: initialState,
    reducers: {
        addTransaction: (state, action ) => {
            const {category} = action.payload;
            state[category].push(action.payload);
        },
        deleteTransaction: (state, action) => {
            const {category, id} = action.payload;

            state[category].filter( transaction => transaction.id !== id);
        }
    }
}); 

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;