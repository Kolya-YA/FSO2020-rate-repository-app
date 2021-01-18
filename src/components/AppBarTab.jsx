import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 15,
  }
});

const AppBarTab = ({ tab }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text color='textInverse' fontSize='subheading' fontWeight='bold'>{tab.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;