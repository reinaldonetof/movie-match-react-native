import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class contactOption extends Component {

    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if(focused) {
                return <Icon name="contacts" size={22} color="#4444DD" />
            } else {
                return <Icon name="contacts" size={22} color="#000000" />
            }
        }
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View>
                <Text>contactOption</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        height:26,
        width:26
    }
})