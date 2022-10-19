import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  plan: null,
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    subscribe: (state, action) => {
      state.plan = action.payload;
    },
  },
});

export const { subscribe } = planSlice.actions;

export const selectPlan = (state) => state.plan.plan;

export default planSlice.reducer;
