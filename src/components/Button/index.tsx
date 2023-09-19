import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

interface ButtonProps {
    onBtnPress: () => void;
    label: string
}

function Button({onBtnPress, label}: ButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.container} onPress={onBtnPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 45,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f19902",
    borderRadius: 5
  },
  label: {
    fontSize: 14,
    color: '#fff',
    fontWeight: "bold"
  },
});

export default Button;
