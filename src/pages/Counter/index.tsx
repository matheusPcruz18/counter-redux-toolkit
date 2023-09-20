import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import Button from '../../components/Button';
import {useAppDispatch} from '../../store/hooks/useAppDispatch';
import {useAppSelector} from '../../store/hooks/useAppSelector';
import {counterSlice} from '../../store/counter/slice';
import {counterIncrementAsync} from '../../store/counter/thunks/counterIncrementAsync';

function Counter(): JSX.Element {
  const dispatch = useAppDispatch();
  const {counter, loading} = useAppSelector(store => store.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Using the Redux Toolkit for manage all the counter states and updates</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <Text style={styles.currentValue}>{counter}</Text>
      )}
      <Text style={styles.label}>
        Click into the button to increase and decrease the counter
      </Text>

      <View style={styles.row}>
        <Button
          onBtnPress={() => dispatch(counterSlice.actions.counterIncrement())}
          label="Increase"
        />
        <Button
          onBtnPress={() => dispatch(counterSlice.actions.counterDecrement())}
          label="Descrease"
        />
        <Button
          onBtnPress={() => dispatch(counterIncrementAsync(1))}
          label="Async"
        />
        <Button
          onBtnPress={() =>
            dispatch(counterSlice.actions.counterincrementByAmount(5))
          }
          label="By five"
        />
        <Button
          onBtnPress={() =>
            dispatch(counterSlice.actions.counterIncrementIfOdd(1))
          }
          label="Iff odd"
        />
        <Button
          onBtnPress={() => dispatch(counterSlice.actions.counterReset())}
          label="Clear"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    gap: 20,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff',
    fontWeight: "bold"
  },
  currentValue: {
    fontSize: 92,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    rowGap: 20,
    gap: 20,
  },
});

export default Counter;
