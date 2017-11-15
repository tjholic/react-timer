import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  TextInput
} from "react-native";
import { FormLabel, FormInput } from "react-native-elements";
import Modal from "react-native-modalbox";
import Button from "../Button";
import { Button as CustomButton } from "react-native-elements";

//TODO: create TimerFormat

function formatTime(time) {
  let minutes = Math.floor(time / 60); //초를 분으로 변경 초는 버림
  time -= minutes * 60; //전체 시작에서 분을 초소 환산 한 값을 뺌(결국 초만 남음)
  let second = parseInt(time % 60, 10); //10진수로 변경
  return `${minutes < 10 ? `0${minutes}` : minutes}:${second < 10
    ? `0${second}`
    : second}`; //분과 초가 10보다 작을 경우 앞에 0을 넣어줌
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

  state = {
    tmp: 0
  };

  _changeDuration(value) {
    console.log(value);
    this.props.changeDuration(value);
  }

  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      changeDuration
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <Modal style={styles.modalParent} ref={"modal1"}>
          <FormLabel style={styles.formLabel}>시간 입력(단위:초)</FormLabel>
          <FormInput
            ref={"formInput"}
            style={styles.formInput}
            keyboardType="numeric"
            onChangeText={text => {
              this.setState({ tmp: text });
            }}
          />
          <CustomButton
            title="변경"
            style={styles.btn}
            onPress={() => {
              this.setState({ swipeToClose: false });
              this._changeDuration(this.state.tmp);
              this.refs.modal1.close();
            }}
          />
        </Modal>
        <View style={styles.upper}>
          <Text style={styles.timer} onPress={() => this.refs.modal1.open()}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
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
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
  modalParent: {
    width: 275,
    height: 150,
    borderColor: "black",
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "white"
  },
  upper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  timer: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  },
  button: {
    color: "black",
    fontSize: 20,
    fontWeight: "100"
  },
  btn: {
    margin: 10
  },
  formInput: {
    fontSize: 17,
    fontWeight: "600",
    padding: 15,
    alignSelf: "center"
  },
  formLabel: {
    fontSize: 17
  }
});

export default Timer;
