import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { pokedexInitialState } from './pokedexInitialState';
import { Pokemon } from './interfaces';

export const pokemonSlice = createSlice({
  name: 'currentPokemon',
  initialState: pokedexInitialState,
  reducers: {
    setCurrent(state, action: PayloadAction<Pokemon>) {
      state.currentPokemon = action.payload
    },
  },
});
