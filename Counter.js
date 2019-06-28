import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'

export default class Counter extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
   convDispTime = (count) => {
    const min = Math.floor((count % (60 * 60)) / (60))
    const sec = Math.floor(count % 60)
    const secSpace = sec > 9 ? '' : '0'
    return `${min}:${secSpace}${sec}`
    }

    render() {
        return (
            <Text>{this.convDispTime(this.props.count)}</Text>
        )
    }
}