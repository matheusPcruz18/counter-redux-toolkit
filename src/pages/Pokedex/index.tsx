import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import { useAppSelector } from '../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { pokemonSlice } from '../../store/pokedex/slice';
import { useGetPokemonByNameQuery } from '../../store/pokedex/apiSlice';

function Pokedex(): JSX.Element {
  const dispatch = useAppDispatch();
  const {currentPokemon, loading} = useAppSelector(store => store.pokedex);
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <Text style={styles.title}>{data?.name}</Text>
        )
      }

      <Button title='change' onPress={() => dispatch(pokemonSlice.actions.setCurrent('test'))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 32,
    color: "#fff"
  }
});

export default Pokedex;
