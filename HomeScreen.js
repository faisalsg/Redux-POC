import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Hello',
    };
  }

  moveToNextScreen() {
    this.props.navigation.navigate('Profile');
    this.props.navigation.navigate('Profile', {name: this.state.value});
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>
          Your current value = {this.state.value}
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(value) => {
            this.setState({value: value});
          }}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.moveToNextScreen();
          }}>
          <Text>Move to next screen</Text>
        </TouchableOpacity>
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
  button: {
    fontSize: 16,
    marginTop: 100,
    padding: 15,
    backgroundColor: '#75d4bc',
  },
  root: {
    alignItems: 'center',
  },
  input: {
    width: '90%',
    marginTop: 100,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#d9dbdd',
  },
});
