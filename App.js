import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      /* 
      <View style={styles.container}>
      */
      <View style={{fontSize: 200,  flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{ fontSize: 72, fontWeight: 'bold' }}>O1G</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
