import React, { Component } from "react";
import One from "./One";
import Two from "./Two";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showText: "",
    };
    this.onChangeText = this.onChangeText.bind(this);
    this.showText = this.showText.bind(this);
  }
  onChangeText(e) {
    this.setState({ text: e.target.value });
  }
  showText(text) {
    this.setState({ showText: this.state.text });
  }
  render() {
    return (
      <>
        <One
          text={this.state.text}
          onChange={this.onChangeText}
          onClick={this.showText}
        />
        <Two state={this.state.showText} />
      </>
    );
  }
}

export default Parent;
