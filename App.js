import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';


// You can import from local files
import Feed from './screens/Feed'
import LoginScreen from './screens/LoginScreen';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
/*import * as firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) { 
firebase.initializeApp(firebaseConfig);
} else {
firebase.app();
}*/


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
<AppContainer/>


      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
LoginScreen:LoginScreen,
Register:Register,
Feed:Feed,
Dashboard:Dashboard


});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems: "center",
    justifyContent: "center"
  },

 
});

const AppContainer = createAppContainer(AppNavigator);

