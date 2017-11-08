import React from "react";
import {View, Text, StyleSheet, StatusBar, Alert} from "react-native";
import Button from "../Button";

class Timer extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.timer}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle-o" onPress={() => Alert.alert("start Press work")}/>
                    <Button iconName="stop-circle-o" onPress={() => Alert.alert("stop press work")}/>
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