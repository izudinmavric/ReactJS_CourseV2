import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counter: 0, showCounter: true },
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toogleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

//////////////////////////////////////////////////////////////
// OLD WAY
// const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toogle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };
//////////////////////////////////////////////////////////////

// const initialAuthState = {
//   isAuth: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuth = true;
//     },
//     logout(state) {
//       state.isAuth = false;
//     },
//   },
// });

import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

export default store;
