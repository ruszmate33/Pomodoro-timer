import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Orban } from './Orban'
import { Counter, num } from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability';
import {vibrate} from './utils'

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterRest}>It is {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            countWork: 0,
            countRest:0,
            workPhase: true,
        }
    }
    
    componentDidMount() {
        setInterval(this.inc, 1000)
    }

    componentDidUpdate() {
      if (this.state.workPhase && this.state.countWork == 10) {
        vibrate();
        this.setState(prevState => ({
          countWork: 0,
          workPhase: false,
      }))
      } else if (!this.state.workPhase && this.state.countRest == 10) {
        vibrate();
        this.setState(prevState => ({
          countRest: 0,
          workPhase: true,
        }))
        } 
      }
  
    inc = () => {
      if (this.state.workPhase) {
        this.setState(prevState => ({
            countWork: prevState.countWork + 1,
        }))
      } else {
        this.setState(prevState => ({
            countRest: prevState.countRest + 1,
      
    }))
  }
  }
   
render() {
  return (
    <View style={styles.container}>
        <Text style={styles.counterWork}>{this.state.countWork}</Text>
        <Text style={styles.counterRest}>{this.state.countRest}</Text>
        <Clock/>
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
