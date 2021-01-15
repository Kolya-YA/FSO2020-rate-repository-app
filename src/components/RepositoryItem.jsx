import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../config/theme';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.repoItemBackground,
  },
  repoLogo: {
    width: 60,
    height: 60,
  }
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.repoLogo}
          source={{uri: item.ownerAvatarUrl}}
        />
        <View>
          <Text>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text>{item.language}</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>{item.stargazersCount}</Text>
          <Text>Stars</Text>
        </View>
        <View>
          <Text>{item.forksCount}</Text>
          <Text>Forks</Text>
        </View>
        <View>
          <Text>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View>
          <Text>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;