import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import Button from "../Button";

//TODO: create TimerFormat

function formatTime(time) {
  let minutes = Math.floor(time/60); //초를 분으로 변경 초는 버림
  time -= minutes * 60; //전체 시작에서 분을 초소 환산 한 값을 뺌(결국 초만 남음)
  let second = parseInt(time % 60 ,10); //10진수로 변경
  return `${minutes < 10 ? `0${minutes}` : minutes}:${second < 10 ? `0${second}` : second}`; //분과 초가 10보다 작을 경우 앞에 0을 넣어줌
}

class Timer extends React.Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      //TODO: start the interval
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      //TODO: stop the interval
      clearInterval(this.state.interval);
    }
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.timer}>{formatTime(timerDuration - elapsedTime)}</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ? (
            <Button iconName="play-circle-o" onPress={startTimer} />
          ) : (
            <Button iconName="stop-circle-o" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  timer: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;
