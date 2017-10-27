import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    static navigationOptions = { title: "FlexBox" }
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
};
