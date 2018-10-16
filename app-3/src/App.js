import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      arr: ['ice', 'dennis', 'cream', 'cat'],
      filteredArray: []
    }
  }

  updateInput(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const { arr, input} = this.state;

    let newArr = arr.filter((ele)=>{
      return ele.includes(input)
    })
    .map((ele, i) => { // needs map to show each element of the array
      return (
        <h2 key ={i}>{ele}</h2>
      )
    })

    // console.log(newArr)
    return (
      <div className="App">
        Hello world
        <input onChange={(e) => this.updateInput(e)} />
        <h2>{newArr}</h2>
      </div>
    );
  }
}

export default App;
