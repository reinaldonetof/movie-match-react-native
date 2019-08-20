import React, { Component } from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import introSliderOption from './introSliderOption';
import contactOption from './contactOptions';

const OptionNavigator = createAppContainer(createBottomTabNavigator({
    introSliderOption:{
        screen:introSliderOption,
    },
    contactOption:{
        screen:contactOption
    }
}))

export default class optionHome extends Component {
    render() {
        return(
            <OptionNavigator />
        );
    }
}