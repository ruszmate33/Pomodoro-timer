import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Orban } from './Orban'
import { Counter, num } from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability'
import {vibrate} from './utils'
import Clock from './Clock'
import ChangeTimers from './ChangeTimers'


export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            countWork: 0,
            countRest:0,
            started: false,
            workPhase: true,
            showForm: false,
        }
    }

    resetCounter = () => {
      this.setState(prevState => ({
        countWork: 0,
        countRest:0,
        started: false,
      }))
    }
    
    letsStart = () => {
      this.setState(prevState => ({started: true}))
    }

    letsStop = () => {
      this.setState(prevState => ({started: false}))
    }

    toggleForm = () => {
      this.setState(prevState => ({showForm: !prevState.showForm}))
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
      if (this.state.workPhase && this.state.started) {
        this.setState(prevState => ({
            countWork: prevState.countWork + 1,
        }))
      } else if (!this.state.workPhase && this.state.started) {
        this.setState(prevState => ({
            countRest: prevState.countRest + 1,
    }))
  }
  }
   
render() {
  
  if (this.state.showForm) return <ChangeTimers/>
  
  return (
    <View style={styles.container}>
        <Text style={styles.counterWork}>{this.state.countWork}</Text>
        <Text style={styles.counterRest}>{this.state.countRest}</Text>
        <View>
          <Button title="Start" onPress={this.letsStart} />
          <Button title="Stop" onPress={this.letsStop} />
          <Button title="Reset" onPress={this.resetCounter} />
        </View>
        <Button title="Set timers" onPress={this.toggleForm} />
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
