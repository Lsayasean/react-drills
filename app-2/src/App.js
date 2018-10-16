import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      arr: ['dennis', 'dennis','dennis']
    }
  }
  render() {
    let newArr = this.state.arr.map((e,i) => {
      return (
        <div key ={i}>{e}</div>
      )

    })
    
    return (
      <div className = 'dennis'>
        {newArr}
      </div>
    );
  }
}

export default App;
