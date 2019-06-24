import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Clock extends React.Component {

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
          <Text style={styles.clockStyle}>It is {this.state.date.toLocaleTimeString()}.</Text>
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
    clockStyle: {
      fontSize: 72,
      fontWeight: 'bold',
      color: 'green',
    },
  });