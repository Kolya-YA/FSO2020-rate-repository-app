import React from 'react';
import { Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native';
import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
  },
  text: {
    color: theme.colors.textInverse,
    fontWeight: 700,
  }
});

const AppBarTab = ({ tab }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.text}>{tab.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;