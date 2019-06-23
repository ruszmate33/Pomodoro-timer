import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ChangeTimers extends React.Component {
    static propTypes = {
        setTimers: PropTypes.func,
    }

    state = {
        timerWork: '',
        timerRest: '',
    }

    handleWorkTimeChange = timerWork => {
        this.setState({timerWork})
    }

    handleRestTimeChange = timerRest => {
        this.setState({timerRest})
    }    

    render() {
        return (
            <View style={{paddingTop: 20}}> 
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleWorkTimeChange} 
                    value={this.state.timerWork}
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleRestTimeChange} 
                    value={this.state.timerRest}
                />
                <Button title="Set timers" />
            </View>
            );
        }
}

const styles = StyleSheet.create({
    input: {
      padding: 5,
      borderColor: 'black',
      borderWidth: 1,
    },
})