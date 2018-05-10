import React, { Component } from 'react';
import { Text, Button, Alert, View } from 'react-native';

const onButtonPress = () =>{
  Alert.alert('Button has been pressed!');
}
exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';
export default class HelloWorldApp extends Component {
  render() {
    return (   
         <View style={{marginTop:78, flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            onPress={onButtonPress}
            title="This looks great!"
            accessibilityLabel="This sounds great!"
          />
          <Button
            onPress={onButtonPress}
            title="Ok!"
            color="#841584"
            style={{width:90}}
            accessibilityLabel="Ok, Great!"
          />
        </View>
    );
  }
}