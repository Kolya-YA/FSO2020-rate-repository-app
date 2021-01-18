import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../config/theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight || 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: theme.colors.appBarBackground,
  },
  scroll: {
    flexDirection: 'row',
  }
});

const tabsList = [
  {text: 'Repositories', link: '/'},
  {text: 'Sign in', link: '/sign_in'},
];

const AppBar = () => {

  return (
    <View style={ styles.container}>
      <ScrollView horizontal>
        {tabsList.map(tab => <AppBarTab tab={tab} key={tab.link}/>)}
      </ScrollView>
    </View>
  );
};

export default AppBar;