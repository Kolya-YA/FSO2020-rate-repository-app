import React from 'react';
import { View, StyleSheet } from 'react-native';

import RepositoryItemBottomBlock from './ItemBottomBlock';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  block: {
    alignItems: 'center'
  }
});

const RepositoryBottom = ({ item }) => {

  const blockList = [
    ['stargazersCount', 'Stars'],
    ['forksCount', 'Forks'],
    ['reviewCount', 'Reviews'],
    ['ratingAverage', 'Rating'],
  ];

  return (
    <View style={styles.container}>
      {blockList.map(x => {
        const data = { data: item[x[0]], text: x[1] };
        return <RepositoryItemBottomBlock key={x[0]} data={data} />;
      })}
    </View>
  );
};

export default RepositoryBottom;