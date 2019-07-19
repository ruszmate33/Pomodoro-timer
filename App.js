import React from 'react';
import {Vibration, TextInput, Button, StyleSheet, Text, KeyboardAvoidingView, View } from 'react-native'

import Counter from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability'
/*import {vibrate} from './utils'*/
import Clock from './Clock'
import ChangeTimers from './ChangeTimers'
import PropTypes from 'prop-types';

export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            workTime: 25*60,
            restTime: 5*60,
            timeSec: 25*60,
            started: false,
            activePhase: "workPhase",
        }
    }

    setNewTimer = newTimer => {
      this.setState({
        timeSec: 60*newTimer.workTime,
        workTime: 60*newTimer.workTime,
        restTime: 60*newTimer.restTime,
        workPhase: true,     
      })
      console.log("setNewTimer newTimer: "+this.state.workTime+" timeSec: "+this.state.restTime)
    }
    
    resetCounter = () => {
      this.setState({
        timeSec: this.state.workTime,
        started: false,
        activePhase: 'workPhase',
      })
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
      setInterval(this.decrement, 1000);
    }

    componentDidUpdate() {
      //vibrate timer is at 0
      if (this.state.timeSec === 0) {
        Vibration.vibrate(500);
        console.log("Buzz out m@#$%!");
      } else if (((this.state.activePhase === 'workPhase') && this.state.timeSec === -1)) {
        //workphase is over
        this.setState(prevState => ({
          timeSec: prevState.restTime,
          activePhase: 'restPhase',
      }))
      } else if (((this.state.activePhase === 'restPhase') && this.state.timeSec == -1)) {
        //Rest phase is over
        Vibration.vibrate(500);
        console.log("Buzz out m@#$%!");
        this.setState(prevState => ({
          timeSec: prevState.workTime,
          activePhase: 'workPhase',
        }))
        } 
      }
  
    decrement = () => {
      if (this.state.started) {
        this.setState(prevState => ({
            timeSec: prevState.timeSec - 1,
        }))
      } 
  }
   
render() {
  
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={this.state.activePhase === 'workPhase' ? styles.workPhase : styles.restPhase}>
            <Counter count = {this.state.timeSec}/>
        </Text>
  
        <View>
          <Button title="Start" onPress={this.letsStart} />
          <Button title="Stop" onPress={this.letsStop} />
          <Button title="Reset" onPress={this.resetCounter} />
        </View>
        <Clock/>
        <ChangeTimers onSubmit={this.setNewTimer}/>
    </KeyboardAvoidingView>
    );
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
  workPhase: {
    fontSize: 72,
    fontWeight: 'bold',
    color: 'red',
  },
  restPhase: {
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
