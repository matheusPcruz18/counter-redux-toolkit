import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';

function Pokedex(): JSX.Element {
  // const dispatch = useAppDispatch();
  // const {counter, loading} = useAppSelector(store => store.counter);

  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
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
    fontSize: 22,
    color: "#fff"
  }
});

export default Pokedex;
