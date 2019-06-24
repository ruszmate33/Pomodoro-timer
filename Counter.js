import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

export dafault class Counter extends React.Component {
    constructor() {
        super()
    }
    convDispTime =(timeSec) => {
        let min = Math.floor((this.state.countWork % (60 * 60)) / (60)),
        let sec = Math.floor(this.state.countWork % 60),
        let secSpace = sec > 9 ? '' : '0'
        return `{min}:{secSpace}:{sec}`
    }
    
    render() {
        return (
            <Text>this.convDispTime(this.props.countWork)</Text>
        )
    }

}