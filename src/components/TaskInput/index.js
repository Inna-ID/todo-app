import React from 'react';
import './taskInput.scss';

class TaskInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    addTask = () => {
        let {input} = this.state;
        if(input) {
            this.props.addTask(input)
            this.setState({input: ''})
        }
    }

    inputChange = event => {
        this.setState({input: event.target.value})
    }

    handleEnter = event => {
        if(event.key === 'Enter') {
            this.addTask()
        }
    }

    render() {
        let {input} = this.state;
        return (
            <div className="task-input">
                <input onChange={this.inputChange} onKeyDown={this.handleEnter} value={input} placeholder="New task" type="text"/>
                <div onClick={this.addTask} className="action-btn">
                    <span className="jam jam-plus"></span>
                </div>
            </div>
        )
    }
}

export default TaskInput;