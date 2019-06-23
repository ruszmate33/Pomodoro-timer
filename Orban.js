import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    orbanContainer: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    orbanText:{
        fontSize: 72, 
        fontWeight: 'bold'
    },
  });
  
  export const Orban = props => (
    <View style={styles.orbanContainer}> 
      <Text style= {styles.orbanText}> O1G is back </Text>
    </View>
  )