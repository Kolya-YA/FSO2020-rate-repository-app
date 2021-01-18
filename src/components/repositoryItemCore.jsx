import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import theme from '../config/theme';
import Text from './Text';
import LangTag from './LangTag';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  repoLogo: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  repoText: {
    flex:1
  }
});

const RepositoryItemCore = ({ item }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.repoLogo}
        source={{uri: item.ownerAvatarUrl}}
      />
      <View style={styles.repoText}>
        <Text fontSize='subheading' fontWeight='bold'>{item.fullName}</Text>
        <Text>{item.description}</Text>
        <LangTag text={item.language}/>
      </View>
    </View>
  );
};

export default RepositoryItemCore;