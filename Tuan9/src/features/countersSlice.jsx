import { createSlice } from '@reduxjs/toolkit';

const countersSlice = createSlice({
  name: 'counters',
  initialState: {
    value: 0,
    step: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const {increment, decrement, reset, incrementByAmount, setStep, } = countersSlice.actions;
export default countersSlice.reducer;