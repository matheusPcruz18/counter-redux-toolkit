import { Action, ThunkAction } from "@reduxjs/toolkit";
import { store } from ".";


export type AppDispatch = typeof store.dispatch;
export type rootstate = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    rootstate,
    unknown,
    Action<string>
>;