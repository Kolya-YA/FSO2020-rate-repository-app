import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

import theme from '../config/theme';
import Text from './Text';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    color: theme.colors.textInverse,
    fontWeight: theme.fontWeights.bold,
  }
});

const AppBarTab = ({ tab }) => {
  const { link, text, forUser: _ , ...props } = tab;
  return (
    <Link 
      to={link}
      component={TouchableWithoutFeedback}
      {...props}
      
    >
      <Text
        style={styles.container}
        color='textInverse'
        fontSize='subheading'
        fontWeight='bold'
      >
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;