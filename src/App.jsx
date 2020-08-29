import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearBtn from "./components/ClearBtn";

class App extends Component {
  state = { input: "" };

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };
  render() {
    return (
      <div className="app">
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
            <Button add={this.addToInput}>X</Button>
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
            <Button add={this.addToInput}>=</Button>
            <Button add={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearBtn handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearBtn>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
