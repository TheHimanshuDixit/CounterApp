import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>Counter: {counter}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => setCounter(counter + 1)}>
                <Text style={{ color: "white" }}>
                    Increase
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => setCounter(0)}>
                <Text style={{ color: "white" }}>
                    Reset
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => { if (counter > 0) setCounter(counter - 1) }}>
                <Text style={{ color: "white" }}>
                    Decrease
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center', // horizontal
        justifyContent: 'center', // vertical
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    counter: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'red',
    },
    btn: {
        borderColor: 'white',
        borderWidth: 2,
        // font color white
        borderRadius: 5,
        padding: 10,
        margin: 10,
        backgroundColor: 'red',
        fontVariant: ['small-caps'],
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    }

})


export default Counter