import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../../config/theme';
import RepositoryItemBottom from './ItemBottom';
import RepositoryItemCore from './ItemCore';

const styles = StyleSheet.create({
  container: {
    padding: theme.paddings.itemPadding,
    backgroundColor: theme.colors.itemBackground,
  }
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <RepositoryItemCore item={item} />
      <RepositoryItemBottom item={item} />
    </View>
  );
};

export default RepositoryItem;