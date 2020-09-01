import React, { Component } from "react";
import * as math from "mathjs";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearBtn from "./components/ClearBtn";
import SpecialBtn from "./components/SpecialBtn";

class Calculator extends Component {
  state = { input: "" };

  addToInput = (val) => {
    if (val === "/" || val === "*" || val === "+" || val === "-") {
      if (this.state.input === "") {
        return;
      }
    }
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    if (this.state.input === "" || this.state.input === ".") {
      return;
    }
    this.setState({ input: math.evaluate(this.state.input) });
  };

  // flipSign = () => {
  //   if (
  //     this.state.input === "" ||
  //     this.state.input === "." ||
  //     this.state.input === "0"
  //   ) {
  //     return;
  //   }
  //   this.setState({ input: parseInt(this.state.input) * -1 });
  // };

  // findPercent = () => {
  //   if (
  //     this.state.input === "" ||
  //     this.state.input === "." ||
  //     this.state.input === "0"
  //   ) {
  //     return;
  //   }
  //   this.setState({ input: parseInt(this.state.input) / 100 });
  // };
  render() {
    return (
      <div className="calculator">
        <div className="calc-wrapper">
          <div className="row">
            <Input className="input" input={this.state.input} />
          </div>

          <div className="row">
            <Button add={this.addToInput}>7</Button>
            <Button add={this.addToInput}>8</Button>
            <Button add={this.addToInput}>9</Button>
            <Button add={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button add={this.addToInput}>4</Button>
            <Button add={this.addToInput}>5</Button>
            <Button add={this.addToInput}>6</Button>
            <Button add={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button add={this.addToInput}>1</Button>
            <Button add={this.addToInput}>2</Button>
            <Button add={this.addToInput}>3</Button>
            <Button add={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button add={this.addToInput}>.</Button>
            <Button add={this.addToInput}>0</Button>
            <Button add={this.handleEqual}>=</Button>
            <Button add={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearBtn
              handleClear={() => {
                this.setState({ input: "" });
              }}
            >
              Clear
            </ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
