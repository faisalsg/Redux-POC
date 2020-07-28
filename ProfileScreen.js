import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello',
    };
  }

  componentDidMount() {
    this.setState({value: this.props.route.params.name});
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Your final value = {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#000',
    marginTop: 100,
  },
  root: {
    alignItems: 'center',
  },
});
