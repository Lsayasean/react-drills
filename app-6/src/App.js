import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: '',
      arr: []
    }
    this.updateArr = this.updateArr.bind(this)
    this.updateInput = this.updateInput.bind(this)
  }

  updateInput(e){
    this.setState({
      input: e.target.value
    })
  }

  updateArr(val){
    let {arr, input} = this.state;
    arr.push(input)
    this.setState({
      arr: arr,
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <input onChange={(e) => this.updateInput(e)} />
        <button onClick={() => this.updateArr(this.state.input)}>Add ToDo</button>

        <Todo 
        arr = {this.state.arr}
        />
      </div>
    );
  }
}

export default App;
