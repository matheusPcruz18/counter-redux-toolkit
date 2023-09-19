import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {counterInitialState} from './initialState';

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
    counterIncreaseIfOdd(state) {
      if(Number(state.counter) % 2 !== 0){
        state.counter += 1;
      }
    }
  },
  extraReducers: builder => {},
});
