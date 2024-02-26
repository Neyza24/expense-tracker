import { createSlice } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        counter: 1
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
}); 

export const { increment } = transactionsSlice.actions;