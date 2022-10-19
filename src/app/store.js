import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import planReducer from "../features/planSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  user: userReducer,
  plan: planReducer,
});
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});
