import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.setState({value: this.props.route.params.name});
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Your final Value from redux</Text>
        <Text style={styles.title}>{this.props.data}</Text>
        <Text style={styles.title}>Your final Value from Navigation</Text>
        <Text style={styles.title}>{this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#000',
    marginTop: 50,
  },
  root: {
    alignItems: 'center',
  },
});
