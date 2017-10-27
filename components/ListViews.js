import React, { Component } from 'react';
import { AppRegistry, FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

export default class ListBasics extends Component {

    static navigationOptions = { title: "ListViews" }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: "center", fontSize: 24}}>FlatList</Text>
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
                <Text style={{textAlign: "center", fontSize: 24}}>SectionList</Text>
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },

})
