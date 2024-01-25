import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
  itemTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
        const productToAdd = action.payload.product;
        const existingProduct = state.items.find(
            (item) => item.id === productToAdd.id
        );

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            state.items.push({ ...productToAdd, quantity: 1 });
        }

        state.itemTotal += 1;
        state.total += parseInt(productToAdd.price);
        localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload.product;
      const existingProduct = state.items.find(
        (item) => item.id === itemToRemove.id
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state.total -= parseInt(existingProduct.price);
          state.items = state.items.filter(
            (item) => item.id !== itemToRemove.id
          );
          state.itemTotal -= 1;
        } else {
          existingProduct.quantity -= 1;
          state.total -= parseInt(existingProduct.price);
          state.itemTotal -= 1;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseItemQuantity: (state, action) => {
      const {id}  = action.payload.item;
      // console.log(id);
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct) {
        existingProduct.quantity += 1;
        state.total += parseInt(existingProduct.price);
        state.itemTotal += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload.product;
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
        state.total -= parseInt(existingProduct.price);
        state.itemTotal -= 1;
      } else if (existingProduct && existingProduct.quantity === 1) {
        state.total -= parseInt(existingProduct.price);
        state.items = state.items.filter(item => item.id !== id);
        state.itemTotal -= 1;
      }
    },
    clearCart: (state) => {
        state.items = [];
        state.total = 0;
        state.itemTotal = 0;
    },
    setCartFromLocalStorage: (state, action) => {
      const cart  = action.payload;

      state.items = cart.items || [];
      state.total = cart.total || 0;
      state.itemTotal = cart.itemTotal || 0;
    },
    
  },
});

export const { addItem, removeItem, setCartFromLocalStorage, clearCart , increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
