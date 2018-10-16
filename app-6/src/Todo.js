import React, { Component } from 'react';

class Todo extends Component {
    render() {
        var  {arr} = this.props;
        let newArr = arr.map((ele, i) => {
            return(
                <h2 key={i}>{ele}</h2>
            )
        })
        return (
            <div>
                {newArr}
            </div>
        );
    }
}

export default Todo;