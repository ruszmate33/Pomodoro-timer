import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ChangeTimers extends React.Component {
    state = {
        workTime: '',
        restTime: '',
        isFormValid: false,
    }
    /*
    static propTypes = {
        handleSubmit: PropTypes.func,
    }
    */
    
    handleWorkTimeChange = workTime => {
        if (+workTime >= 0) {
            this.setState({workTime}, this.validateForm)
            console.log("handleWorkTimeChange "+this.state.workTime)
        }
    }

    handleRestTimeChange = restTime => {
        if (+restTime >= 0) {
            this.setState({restTime}, this.validateForm)
            console.log("handleRestTimeChange "+this.state.restTime)
        }
    }

    validateForm = () => {
        if (+this.state.workTime >= 0 && +this.state.restTime >= 0) {
            return this.setState({isFormValid: true})
        } else {
            return this.setState({isFormValid: false})
        }
    }
    
    handleSubmit = () => {
        if (this.validateForm) {
            this.props.onSubmit(this.state)
        }
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
                    placeholder="new work time [min]"
                    keyboardType='numeric'
                />
                <TextInput 
                    style={styles.input} 
                    onChangeText={this.handleRestTimeChange}
                    //validation missing
                    value={this.state.restTime}
                    placeholder="new rest time [min]"
                    keyboardType='numeric'
                />
                <Button 
                    title="Set timer" 
                    onPress={this.handleSubmit}
                    disabled={!this.state.isFormValid}
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