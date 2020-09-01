import React, { Component } from "react";
import "./App.css";

import Calculator from "./Calculator";

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 id="heading">HabteJ Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
