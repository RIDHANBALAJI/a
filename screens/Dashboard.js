import React from 'react';
import { Text, SafeAreaView, StyleSheet,View } from 'react-native';



export default class Dashboard extends React.Component{
    render(){
  return (
    <View style={styles.container}>
        <Text>Dashboard</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
