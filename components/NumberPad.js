// This was tried to seperate the components but I had no Time. So I had not used it.


import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { italic } from "ansi-colors";

export default class NumberPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: [],
      errorMessage: ""
    };
  }

  onPress(txt) {
    console.log(txt);  // foo
  }
  
  render() {
    return (
      <View style={styles.numberpadContainer}>
        <Text>{this.state.pin}</Text>
        <Text style={styles.error}>{this.state.errorMessage}</Text>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("1") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={this.onPress.bind(this,'foo')}
            >
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("3") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("4") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("5") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("6") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              6
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("7") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("8") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("9") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              9
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.numberRow}>
          <TouchableOpacity>
            <Text style={styles.numbers} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.numbers}
              onPress={() => {
                if (this.state.pin.length < 4) {
                  this.setState({ pin: this.state.pin.concat("0") });
                } else {
                  this.setState({ errorMessage: "Invalid Pin" });
                  this.setState({ pin: "" });
                }
              }}
            >
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.numbers} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberpadContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    margin: 50
  },
  numberRow: {
    flexDirection: "row"
  },
  numbers: {
    fontSize: 40,
    paddingHorizontal: 50,
    paddingVertical: 20
  },
  error: {
    color: "red"
  }
});
