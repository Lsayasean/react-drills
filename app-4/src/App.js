import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      name: '',
      password: '',
      alert: ''
    }
    this.something = this.something.bind(this)
  }
  updateName(e){
    this.setState({
      name: e.target.value
    })
  }
  updatePass(e){
    this.setState({
      password: e.target.value
    })
  }
  something(){
    alert(`username: ${this.state.name} password: ${this.state.password}`)
  }
  render() {
    return (
      <div className="App">
      <input placeholder='username' onChange = {(e) => this.updateName(e)}/>
      <input placeholder='password' onChange = {(e) => this.updatePass(e)}/>
      <button onClick = {() => this.something()}>Click me</button>
      </div>
    );
  }
}

export default App;
