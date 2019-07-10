import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ChangeTimers extends React.Component {
    state = {
        newTimer: '',
    }
    /*
    static propTypes = {
        handleSubmit: PropTypes.func,
    }
    */
    
    handleTimeChange = newTimer => {
        this.setState({newTimer})
        console.log("handleTimeChange "+this.state.newTimer)
    }
    
    handleSubmit = () => {
        this.props.onSubmit({newTimer: this.state.newTimer})
        //this.props.onSubmit(this.state)
        console.log("handleSubmit "+this.state.newTimer)
    }  
    
    render() {
        return (
            <View style={{paddingTop: 20}}> 
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleTimeChange}
                    //validation missing
                    value={this.state.newTimer}
                    placeholder="new work time"
                    keyboardType='numeric'
                />
                <Button 
                    title="Set timer" 
                    onPress={this.handleSubmit}
                />
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