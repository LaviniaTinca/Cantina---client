import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  // posts: [],
  isCartOpen: false,
  cart: [],
  items: [],
};

// const initialStateCart = {
//   isCartOpen: false,
//   cart: [],
//   items: [],
// }

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialStateCart,
//   reducers:{
//     setItems: (state, action) => {
//       state.items = action.payload;
//     },

//     addToCart: (state, action) => {
//       state.cart = [...state.cart, action.payload.item];
//     },

//     removeFromCart: (state, action) => {
//       state.cart = state.cart.filter((item) => item.id !== action.payload.id);
//     },

//     increaseCount: (state, action) => {
//       state.cart = state.cart.map((item) => {
//         if (item.id === action.payload.id) {
//           item.count++;
//         }
//         return item;
//       });
//     },

//     decreaseCount: (state, action) => {
//       state.cart = state.cart.map((item) => {
//         if (item.id === action.payload.id && item.count > 1) {
//           item.count--;
//         }
//         return item;
//       });
//     },

//     setIsCartOpen: (state) => {
//       state.isCartOpen = !state.isCartOpen;
//     },
//   }
// })

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log(state)
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});
export const { setMode, setLogin, setLogout, setItems, addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,} =
  authSlice.actions;
export default authSlice.reducer;
