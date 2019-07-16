import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ChangeTimers extends React.Component {
    state = {
        workTime: '',
        restTime: '',
    }
    /*
    static propTypes = {
        handleSubmit: PropTypes.func,
    }
    */
    
    handleWorkTimeChange = workTime => {
        this.setState({workTime})
        console.log("handleWorkTimeChange "+this.state.workTime)
    }

    handleRestTimeChange = restTime => {
        this.setState({restTime})
        console.log("handleRestTimeChange "+this.state.restTime)
    }
    
    handleSubmit = () => {
        this.props.onSubmit(this.state)
    
        //this.props.onSubmit(this.state)
        console.log("handleSubmit workTime: "+this.state.workTime+" restTime: "+ this.state.restTime)
    }  
    
    render() {
        return (
            <View style={{paddingTop: 20}}> 
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleWorkTimeChange}
                    //validation missing
                    value={this.state.workTime}
                    placeholder="new work time"
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleRestTimeChange}
                    //validation missing
                    value={this.state.restTime}
                    placeholder="new rest time"
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