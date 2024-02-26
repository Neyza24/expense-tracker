import { createSlice } from '@reduxjs/toolkit';
import { CATEGORIES } from '../dataCategories';


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
            state[category] =  state[category].filter( transaction => transaction.id !== id);
        }
    }
}); 

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
    Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);