import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from './counter/slice';
import {pokemonSlice} from './pokedex/slice';
import {pokedexApi} from './pokedex/apiSlice';

export const store = configureStore({
  reducer: {
    //Aqui vão todos os nossos reducers, ao invés de um contexto.
    counter: counterSlice.reducer,
    pokedex: pokemonSlice.reducer,
    [pokedexApi.reducerPath]: pokedexApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(pokedexApi.middleware),
});
