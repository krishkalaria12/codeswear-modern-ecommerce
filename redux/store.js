import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/Cartslice"
import authReducer from "@/redux/features/authSlice"
import themeReducer from "@/redux/features/themeSlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        theme: themeReducer,
    }
})
