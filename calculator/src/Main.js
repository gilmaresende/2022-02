import React, { Component } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Button from "./components/Button";
import Display from "./components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Main extends Component {
  state = { ...initialState };

  addDigit = (n) => {
 
    const clearDisplay =
      this.state.displayValue === "0" ||
      this.state.displayValue === 0 ||
      this.state.clearDisplay;

    if (
      n === "." &&
      !clearDisplay &&
      this.state.displayValue.includes(".")
    ) {
      return;
    }

    const currentValur = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValur + "" + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  clearMemory = () => {
    this.setState({ displayValue: "0" });
  };

  setOperation = (operation) => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true });
    } else {
      const eq = operation === "=";
      const values = [...this.state.values];

      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      } catch (e) {
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: `${values[0]}`,
        operation: eq ? null : operation,
        current: eq ? 0 : 1,
        clearDisplay: !eq,
        values,
      });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <View style={style.conteiner}>
          <Display value={this.state.displayValue} />
          <View style={style.buttons}>
            <Button label="AC" triple onClick={this.clearMemory} />
            <Button label="/" operation onClick={this.setOperation} />
            <Button label="7" onClick={this.addDigit} />
            <Button label="8" onClick={this.addDigit} />
            <Button label="9" onClick={this.addDigit} />
            <Button label="*" operation onClick={this.setOperation} />
            <Button label="4" onClick={this.addDigit} />
            <Button label="5" onClick={this.addDigit} />
            <Button label="6" onClick={this.addDigit} />
            <Button label="-" operation onClick={this.setOperation} />
            <Button label="1" onClick={this.addDigit} />
            <Button label="2" onClick={this.addDigit} />
            <Button label="3" onClick={this.addDigit} />
            <Button label="+" operation onClick={this.setOperation} />
            <Button label="0" double onClick={this.addDigit} />
            <Button label="." onClick={this.addDigit} />
            <Button label="=" operation onClick={this.setOperation} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
