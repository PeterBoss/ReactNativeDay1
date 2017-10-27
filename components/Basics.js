import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Basics extends React.Component {
  static navigationOptions = { title: "Learn the Basics" }
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}
