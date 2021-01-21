import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { useApolloClient } from '@apollo/react-hooks';

import AuthStorageContext from "../contexts/AuthStorageContext";
import useAuthorizedUser from '../hooks/useAuthorizedUser';

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

const AppBar = () => {
  const user = useAuthorizedUser();
  console.log('User__: ', user);
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    console.log('Press sign out');
  };

  const tabsList = [
    {text: 'Repositories', link: '/'},
    {text: 'Sign in', link: '/sign_in', forUser: false},
    {text: 'Sign out', link: '/', forUser: true, onPress: signOut},
  ];

  return (
    <View style={ styles.container}>
      <ScrollView horizontal>
        {
          tabsList.map(tab => {
            if (tab.forUser === undefined || tab.forUser === !!user)
              return <AppBarTab tab={tab} key={tab.text}/>;
          })
        }
      
      </ScrollView>
    </View>
  );
};

export default AppBar;