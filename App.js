import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';

export default class App extends Component {
  displaysound = () => {
    alert("sounds")
  }
  render() {
    return (
      <View>
     <View style = {{width : 200 , height:100}}>
     <Button title = "sound1" color = "red" onPress = {this.displaysound}/>
       
      </View>

      <View style = {{width : 200 , height: 100}}>
      <Button title = "sound2" color = "blue" onPress = {this.displaysound}/>
      </View>

      <View style = {{width : 200 , height: 100}}>
      <Button title = "sound3" color = "yellow" onPress = {this.displaysound}/>
      </View>

      <View style = {{width : 200 , height : 100}}>
      <Button title = "sound4" color = "green" onPress = {this.displaysound}/>
      </View>
      </View>

      
    );
  }
}