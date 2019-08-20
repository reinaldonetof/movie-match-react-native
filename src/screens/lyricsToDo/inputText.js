import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

import { connect } from 'react-redux';

const inputText = () => {
    const [arrayText, setArrayText] = useState([]);

    return(
        <View>
            <Text>Input com Hook</Text>
        </View>
    )

}

const mapStateToProps = (state) => {
    return{
      lyrics:state.lyrics.inputLyric,
    };
  };
  
  const inputTextConnect = connect(mapStateToProps, {})(inputText);
  export default inputTextConnect;