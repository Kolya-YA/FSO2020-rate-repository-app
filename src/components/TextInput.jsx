import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../config/theme';

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    backgroundColor: theme.colors.appBackground,
    borderColor: theme.colors.appBarBackground,
    borderWidth: 1,
    borderRadius: 3,
  },
  inputError: {
    borderColor: theme.colors.errorColor,
  }
});

const TextInput = ({ error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.inputError,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;