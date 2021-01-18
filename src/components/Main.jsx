import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../config/theme';
import { Redirect, Route, Switch } from 'react-router-native';
import SignIn from './SighnIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.appBackground,
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' component={RepositoryList} exact />
        <Route path='/sign_in' component={SignIn} />
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;