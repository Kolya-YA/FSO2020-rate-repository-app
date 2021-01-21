import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import theme from '../config/theme';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    padding: theme.paddings.itemPadding,
  }
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.container}>
      <FormikTextInput name='username' label='Username' placeholder='Max. 25 symbols' />
      <FormikTextInput name='password' label='Password' placeholder='Max. 20 symbols' secureTextEntry />
      <Button
        onPress={onSubmit}
        title='Sign in'
      />
    </View>
  );
};

export default SignInForm;