import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { pokedexInitialState } from './pokedexInitialState';

export const pokemonSlice = createSlice({
  name: 'currentPokemon',
  initialState: pokedexInitialState,
  reducers: {
    setCurrent(state, action: PayloadAction<string>) {
      state.currentPokemon = "123"
    },
  },
});
