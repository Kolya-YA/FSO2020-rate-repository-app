import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../config/theme';
import RepositoryBottom from './RepositoryBottom';
import RepositoryItemCore from './repositoryItemCore';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: theme.colors.repoItemBackground,
  }
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <RepositoryItemCore item={item} />
      <RepositoryBottom item={item} />
    </View>
  );
};

export default RepositoryItem;