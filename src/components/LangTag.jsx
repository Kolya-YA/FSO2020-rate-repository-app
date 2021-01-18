import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../config/theme';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    backgroundColor: theme.colors.tagColor,
    borderRadius: 3,
    padding: 5,
    color: theme.colors.textInverse,
    fontWeight: theme.fontWeights.bold,
  }
});

const LangTag = ({ text }) => (
  <Text style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </Text>
);

export default LangTag;