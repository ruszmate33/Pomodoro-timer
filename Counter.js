import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { renderComponent } from 'recompose';

export default class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        countdown: 25*60,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        };
    }

    componentDidMount() {
        setInterval(this.convertTimer, 1000)
    }

    componentDidUpdate() {
        this.convertTimer();
    }

    convertTimer = () => {
        this.setState(prevState => {
            hours: Math.floor((seconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes: Math.floor((seconds % (1000 * 60 * 60)) / (1000 * 60));
            seconds: Math.floor((seconds % (1000 * 60)) / 1000);
        })
    }

    render() {
        return (
            <View style={styles.container}> 
                <Text style= {styles.counter}> {this.state.hours}:{this.state.minutes}:{this.state.seconds} </Text>
            </View>
        );
    }
}

  const styles = StyleSheet.create({
    container: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    counter:{
        fontSize: 72, 
        fontWeight: 'bold'
    },
  });