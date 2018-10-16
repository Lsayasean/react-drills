import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ''
    }
  }

  updateInput(e){
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange = {e => this.updateInput(e)}/>
        <h1> {this.state.input} </h1>
      </div>
    );
  }
}

export default App;
