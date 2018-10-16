import React, { Component } from 'react';

class NewTask extends Component {
    render() {
        let {arr, input} = this.props;
        return (
            <button onClick = {() => arr(input)}>
                Add Task
            </button>
        );
    }
}

export default NewTask;