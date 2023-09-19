import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter/slice'

export const store = configureStore({
    reducer: {
        //Aqui vão todos os nossos reducers, ao invés de um contexto.
        counter: counterSlice.reducer
    }
})