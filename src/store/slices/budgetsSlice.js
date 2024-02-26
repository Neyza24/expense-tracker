import { createSlice } from '@reduxjs/toolkit';

export const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: {
        counter: 1
    },
    reducers: {
        increment: (state, /* action */ ) => {
            state.counter += 1;
        },
    }
}); 

export const { increment } = budgetsSlice.actions;