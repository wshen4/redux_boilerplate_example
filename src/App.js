import React, { Component } from "react";
import { connect } from "react-redux";
import { exampleAction, exampleActionTwo } from "./redux/actions/actions.js";

import "./App.css";

class App extends Component {
  render() {
    //console.log(this.props);
    return (
      <div>
        <h1>{this.props.examplePropOne}</h1>
        <h1>{this.props.examplePropTwo}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    examplePropOne: state.examplePropOne,
    examplePropTwo: state.examplePropTwo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    exampleAction: () => dispatch(exampleAction()),
    exampleActionTwo: data => dispatch(exampleActionTwo(data))
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
