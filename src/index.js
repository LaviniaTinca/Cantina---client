import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import authReducer from "./state/authRedux";
import cartReducer from "./state/cartRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";


const persistConfig = { key: "root", storage, version: 1 };
const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);
//const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
          </PersistGate>
        </ThemeProvider>
      </Provider>
  </React.StrictMode>
);
