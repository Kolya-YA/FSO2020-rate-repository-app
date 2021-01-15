import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
};

export default RepositoryList;