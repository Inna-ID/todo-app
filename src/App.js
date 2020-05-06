import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import './App.scss';

let gradient = [
  [44, 72, 230],
  [50, 139, 233],
  [54, 255, 255]
];

let minVal = 0,
  maxVal = 255;

function setGradientBg() {
  for (let i = 0; i < gradient.length; i++) {
    for (let j = 0; j < gradient[i].length; j++) {
      if (gradient[i][j] < maxVal + 3) {
        gradient[i][j] += 3;
      } else {
        gradient[i][j] = minVal;
      }
    }
  }
  //console.log(gradient);
  document.getElementsByClassName('App')[0].style.background = `linear-gradient(145deg, rgb(${gradient[0]}), rgb(${gradient[1]}), rgb(${gradient[2]})`;
}

// setInterval(function(){
//   setGradientBg()
// }, 1000)



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          id: 0,
          title: 'read about life cycles',
          done: false
        },
        {
          id: 1,
          title: 'Do english hw',
          done: true
        },
        {
          id: 2,
          title: 'read about destructuring',
          done: false
        }
      ]
    }
  }


  addTask = task => {
    let { tasks } = this.state;
    tasks.push({
      id: tasks.lenght !== 0 ? task.length : 0,
      title: task,
      done: false
    })
    this.setState({ tasks })
  }

  doneTask = id => {
    let index = this.state.tasks.map(task => task.id).indexOf(id);
    let { tasks } = this.state;
    tasks[index].done = true;
    this.setState({ tasks })
  }

  deleteTask = id => {
    // формируется массив из idшек тасок ... берем индекс нужного id
    let index = this.state.tasks.map(task => task.id).indexOf(id);

    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({ tasks });
  }


  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter( task => !task.done );
    // const doneTasks = tasks.filter( task => task.done );

    return (
      <div className="App">
        <header className="App-header">
          <h1 data-text="TODO list">TODO list</h1>
        </header>
        <div className="container">
          <h2 className="amount">Active tasks: {activeTasks.length}</h2>
          <div className="tasks-wrap">
            <TaskInput addTask={this.addTask}></TaskInput>
            {/* {[...activeTasks, ...doneTasks].map( task => */}
            {tasks.map(task =>
              <Task
                doneTask={() => this.doneTask(task.id)}
                deleteTask={() => this.deleteTask(task.id)}
                task={task}
                key={task.id}>
              </Task>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;