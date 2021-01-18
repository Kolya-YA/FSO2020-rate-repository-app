import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    alignItems:'center'
  }
});

const RepositoryItemBottomBlock = ({ data }) => {

  const numToK = num => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num;
  };

  return (
    <View style={styles.container}>
      <Text fontWeight='bold'>{numToK(data.data)}</Text>
      <Text color='textSecondary'>{data.text}</Text>
    </View>
  );
};

export default RepositoryItemBottomBlock;