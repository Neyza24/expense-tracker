import { configureStore } from "@reduxjs/toolkit";
import { budgetsSlice } from "./slices/budgetsSlice";
import { transactionsSlice } from "./slices/transactionsSlice";


export const store = configureStore({
    reducer:{
        budgets: budgetsSlice.reducer,
        transactions: transactionsSlice.reducer
    }
});




