import React from 'react';
import { View, StyleSheet } from 'react-native';
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
    flexDirection: 'row',
  }
});

const tabsList = [
  {text: 'Repositories'},
  {text: 'Repo2'},
  {text: 'Repo3'},
];

const AppBar = () => {

  return (
    <View style={ styles.container}>
      {tabsList.map(tab => <AppBarTab tab={tab} key={tab.text}/>)}
    </View>
  );
};

export default AppBar;