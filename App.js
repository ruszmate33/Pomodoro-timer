import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Orban } from './Orban'
import { Counter, num } from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability';

export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            count: 0,
        }
    }
    
    componentDidMount() {
        setInterval(this.inc, 1000)
    }

    componentDidUpdate() {
        if (this.state.count == 10) {
          this.setState(prevState => ({
            count: 0,
        })) 
        }
    }
  
    inc = () => {
        this.setState(prevState => ({
        count: prevState.count + 1,
    }))
  }
   
render() {
  return (
    <View style={styles.container}>
        <Text style={styles.counterWork}>{this.state.count}</Text>
        <Text style={styles.counterRest}>{this.state.count}</Text>
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
  counterWork: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'red',
  },
  counterRest: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'green',
  },
});
