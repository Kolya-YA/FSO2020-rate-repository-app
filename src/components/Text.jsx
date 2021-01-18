import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../config/theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.body,
    marginBottom: theme.textMargin.bottom
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary
  },
  colorTextInverse: {
    color: theme.colors.textInverse
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },
});

const Text = ({ color, fontSize, fontWeight, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textInverse' && styles.colorTextInverse,
    color === 'textSecondary' && styles.colorTextSecondary,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontSize === 'subheading' && styles.fontSizeSubheading,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;