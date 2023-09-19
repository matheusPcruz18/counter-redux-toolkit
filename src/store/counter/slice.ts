import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {counterInitialState} from './initialState';
import {incrementAsyncBuilder} from './thunks/counterIncrementAsync';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    counterIncrement(state) {
      state.counter += 1;
    },
    counterDecrement(state) {
      state.counter -= 1;
    },
    counterincrementByAmount(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    counterReset(state) {
      state.counter = 0;
    },
    counterIncrementIfOdd(state, action) {
      if (state.counter % 2 === 1) {
        state.counter += action.payload;
      }
    },
  },
  extraReducers: builder => {
    incrementAsyncBuilder(builder);
  },
});
