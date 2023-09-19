import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import Button from '../../components/Button';
import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { counterDecrement, counterIncreaseIfOdd, counterIncrement, counterReset, counterincrementByAmount } from '../../store/counter/actions';
import { useAppSelector } from '../../store/hooks/useAppSelector';

function Home(): JSX.Element {
  const dispatch = useAppDispatch();
  const { counter, loading } = useAppSelector((store) => store.counter);

  return (
    <View style={styles.container}>
      {
        loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (

          <Text style={styles.currentValue}>{counter}</Text>
        )
      }
      <Text style={styles.label}>
        Click into the button to increase and decrease the counter
      </Text>

      <View style={styles.row}>
        <Button onBtnPress={() => dispatch(counterIncrement())} label='Increase' />
        <Button onBtnPress={() => dispatch(counterDecrement())} label='Descrease' />
        <Button onBtnPress={() => dispatch(counterIncrement())} label='Async' />
        <Button onBtnPress={() => dispatch(counterincrementByAmount(5))} label='By five' />
        <Button onBtnPress={() => dispatch(counterIncreaseIfOdd())} label='Iff odd' />
        <Button onBtnPress={() => dispatch(counterReset())} label='Clear' />
      </View>
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
    gap: 20
  },
  currentValue: {
    fontSize: 92,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    textAlign: "center"
  },
  row: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    rowGap: 20,
    gap: 20
  }
});

export default Home;
