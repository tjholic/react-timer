import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';


class Timer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.timer}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>Buttons Here</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "red"
    },
    upper:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center"    
    },
    lower:{
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
    timer: {
        color:"white",
        fontSize:120,
        fontWeight:"100"
    }
});

export default Timer;