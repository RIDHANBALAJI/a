import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
//import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

   
    };
  }








  render() {
 

      return (
        <View style={styles.container}>
        

         <View>
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Username"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
        </View>
     
        <View style={styles.buttonsContainer}>
          
        <TouchableOpacity
              style={styles.button}
              onPress={
                () => {this.props.navigation.navigate('Feed')}
               }>
              <Text style={{ fontSize:40, color:"brown"}}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
              style={styles.button}
              onPress={() =>this.props.navigation.navigate('Register')}>
              <Text style={{ fontSize:35, color:"brown"}}>If new user Click here to register your details</Text>
        </TouchableOpacity>

       
        </View>

      
        </View>
      );
    }
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems: "center",
    justifyContent: "center"
  },
  
  textinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
});

