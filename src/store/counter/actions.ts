import { counterSlice } from "./slice";

export const {
    counterIncrement,
    counterDecrement,
    counterincrementByAmount,
    counterReset,
    counterIncreaseIfOdd
} = counterSlice.actions