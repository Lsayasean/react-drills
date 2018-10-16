import React, { Component } from 'react';
import NewTast from './NewTask';
import TaskArr from './TaskArr';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      arr: []
    }
    this.updateInput = this.updateInput.bind(this);
    this.addTask = this.addTask.bind(this);

  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  addTask(val){
    let {arr} = this.state;
    arr.push(val);
    
    this.setState({
      arr: arr
    })
  }





  render() {
    return (
      <div className="App">
        <h1>Hello Dennis, add some task please</h1>
        <input onChange={(e) => this.updateInput(e)} />
        
        <NewTast 
        input = {this.state.input}
        arr = {this.state.arr}
        />
        <TaskArr 
        tastArr = {this.state.arr}
        />
      </div>
    );
  }
}

export default App;
