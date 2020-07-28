
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import Store from './Store';
import Navigator from './src/Navigator'

const {store} = Store();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
