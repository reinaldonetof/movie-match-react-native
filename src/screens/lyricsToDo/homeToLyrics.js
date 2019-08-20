import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class homeToLyrics extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>homeToLyrics</Text>
                <Touchable style={{ backgroundColor: '#872795' }} onPress={() => {
                    this.props.navigation.navigate('inputText')
                }} >
                    <Text>PARA Inserir ctrlC</Text>
                </Touchable>

                <Touchable style={{ backgroundColor: '#943540' }} onPress={() => {
                    this.props.navigation.navigate('searchText')
                }} >
                    <Text>PARA buscar</Text>
                </Touchable>

            </View>
        );
    }
}