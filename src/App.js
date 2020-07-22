import React, { Component } from 'react';
import flexiconfig from './FlexiConfig/flexiconfig';
import Flexi from './FlexiComponent/flexiComponent';
import Display from './Display/Display'
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      place: ""
    };
  }

  onFlexiSubmit = value => {
    this.setState({
      name: value.name,
      place: value.place
    })
  }

  render() {
    return (
      <React.Fragment>
        <Flexi onSubmitFunc={this.onFlexiSubmit} config={flexiconfig} />
        <Display name={this.state.name} place={this.state.place} />
      </React.Fragment>
    )
  }

}


export default App;
