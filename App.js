import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import { Orban } from './Orban'
//import Counter from './Counter'
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability'
import {vibrate} from './utils'
import Clock from './Clock'
import ChangeTimers from './ChangeTimers'


export default class App extends React.Component {
      constructor() { 
        super()
        this.state = {
            countWork: 25*60,
            countRest:0,
            started: false,
            workPhase: true,
            showForm: false,
            hoursWork: 0,
            minutesWork: 25,
            secondsWork: 0,
            hoursRest: 0,
            minutesRest: 0,
            secondsRest: 0,
        }
    }
    convertTimer = () => {
      this.setState(prevState => {
          hoursWork: Math.floor((this.state.countWork % (60 * 60 * 24)) / (60 * 60));
          minutesWork: Math.floor((this.state.countWork % (60 * 60)) / (60));
          secondsWork: Math.floor(this.state.countWork % 60);
          hoursRest: Math.floor((this.state.countRest % (60 * 60 * 24)) / (60 * 60));
          minutesRest: Math.floor((this.state.countRest % (60 * 60)) / (60));
          secondsRest: Math.floor(this.state.countRest % 60);
      })
    }
    
    resetCounter = () => {
      this.setState(prevState => ({
        countWork: 25*60,
        countRest:0,
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
    /* 
    updater = () => {
      this.inc;
      this.convertTimer;
    }
    */

    componentDidMount() {
      setInterval(this.inc, 1000);
      //setInterval(this.convertTimer, 1000)
    }

    componentDidUpdate() {
      if (this.state.workPhase && this.state.countWork == 0) {
        vibrate();
        this.setState(prevState => ({
          countRest: 5*60,
          workPhase: false,
          
      }))
      } else if (!this.state.workPhase && this.state.countRest == 0) {
        vibrate();
        this.setState(prevState => ({
          countWork: 25*60,
          workPhase: true,
        }))
        } 
      }
  
    inc = () => {
      if (this.state.workPhase && this.state.started) {
        this.setState(prevState => ({
            countWork: prevState.countWork - 1,
        }))
        this.convertTimer();
      } else if (!this.state.workPhase && this.state.started) {
        this.setState(prevState => ({
            countRest: prevState.countRest - 1,
            }))
        this.convertTimer();
    }
  }
   
render() {
  
  if (this.state.showForm) return <ChangeTimers/>
  
  return (
    <View style={styles.container}>
        <Text style={styles.counterWork}>{this.state.countWork}</Text>
        <Text style={styles.counterWork}>{this.state.hoursWork}:{this.state.minutesWork}:{this.state.secondsWork}</Text>
        <Text style={styles.counterRest}>{this.state.hoursRest}:{this.state.minutesRest}:{this.state.secondsRest}</Text>
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
