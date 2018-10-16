import React, { Component } from 'react';

class TaskArr extends Component {
    render() {
        let {tastArr} = this.props;
        let newTast = tastArr.map((ele, i) => {
            return (
                <h2 key = {i}>{ele}</h2>
            )
        })
        return (
            <div>
                {newTast}
            </div>
        );
    }
}

export default TaskArr;