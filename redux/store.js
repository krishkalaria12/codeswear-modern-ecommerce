import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/Cartslice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
