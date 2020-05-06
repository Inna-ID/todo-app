import React from 'react';
import './task.scss';


const Task = ({task, ...props}) => {

    // const ActionBtn = () => <div className="action-btn">
    //     {task.done ? (
    //         <span onClick={props.deleteTask} className="jam jam-check"></span>
    //     ) : (
    //         // <span className="jam jam-close"></span>
    //         <span onClick={props.doneTask}></span>
    //     )}
    // </div>


    let ActionBtn = () => <>
        {task.done ? (
            <div onClick={props.deleteTask} className="action-btn">
                <span className="jam jam-check"></span>
            </div>
        ) : (
            <div onClick={props.doneTask} className="action-btn"></div>
        )}
    </>

    const className = 'task' + (task.done ? ' task-done' : '')

    return(
        <div className={className}>
            <p>{task.title}</p>
            <ActionBtn></ActionBtn>
        </div>
    )
}

export default Task;