import React, { Component } from 'react';
import { AppRegistry, Image, View, Text } from 'react-native';

export default class Props extends Component {
  static navigationOptions = { title: "Props" }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (

      <View style={{ alignItems: 'center' }}>

        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}
class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}