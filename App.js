import React from 'react';
import { TextInput, Button, StyleSheet, Text, View } from 'react-native'

import Counter from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability'
import {vibrate} from './utils'
import Clock from './Clock'
import ChangeTimers from './ChangeTimers'
import PropTypes from 'prop-types';

export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            timeSec: 25,
            started: false,
            workPhase: true,
        }
    }

    setNewTimer = newTimer => {
      this.setState((newTimer) => ({
        timeSec: newTimer,     
      }))
      console.log("setNewTimer newTimer: "+this.newTimer+" timeSec: "+this.state.timeSec)
    }
    
    resetCounter = () => {
      this.setState(prevState => ({
        timeSec: 25,
        started: false,
        workPhase: true,
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
      setInterval(this.inc, 1000);
    }

    componentDidUpdate() {
      //workphase is over
      if (this.state.workPhase && this.state.timeSec == 0) {
        vibrate();
        this.setState(prevState => ({
          timeSec: 5,
          workPhase: false,
          
      }))
      //Rest phase is over
      } else if (!this.state.workPhase && this.state.timeSec == 0) {
        vibrate();
        this.setState(prevState => ({
          timeSec: 25,
          workPhase: true,
        }))
        } 
      }
  
    inc = () => {
      if (this.state.started) {
        this.setState(prevState => ({
            timeSec: prevState.timeSec - 1,
        }))
      } 
  }
   
render() {
  
  if (this.state.workPhase) {
  return (
    <View style={styles.container}>
        <Text style={styles.counterWork}>
            <Counter count = {this.state.timeSec}/>
        </Text>
  
        <View>
          <Button title="Start" onPress={this.letsStart} />
          <Button title="Stop" onPress={this.letsStop} />
          <Button title="Reset" onPress={this.resetCounter} />
        </View>
        <Clock/>
        <ChangeTimers onSubmit={this.setNewTimer}/>
    </View>
    );
  } else {
    return (
      <View style={styles.container}>          
          <Text style={styles.counterRest}>
              <Counter count = {this.state.timeSec}/>
          </Text>
          
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
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
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
  input: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },
});
