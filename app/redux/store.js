import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/app/redux/features/Cartslice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})
