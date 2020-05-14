import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import './App.scss';
import defaultTasks from './data/tasks.json';
import DataStorage from './components/DataStorage';

const storage = new DataStorage(defaultTasks);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
  }
  
  componentDidMount () {
    this.setState({ tasks: storage.loadJson() })

    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      storage.saveJson(this.state.tasks)
      e.stopPropagation();
    })
  }

  ///???
  componentWillUnmount () {
    window.removeEventListener('beforeunload', (e) => {
      e.stopPropagation();
    })
  }


  addTask = task => {
    let { tasks } = this.state;
    tasks.push({
      id: '_' + Math.random().toString(36).substr(2, 9),
      title: task,
      done: false
    })
    
    this.setState({ tasks });
  }


  doneTask = id => {
    let { tasks } = this.state;
    let index = tasks.map(task => task.id).indexOf(id);
    
    tasks[index].done = true;
    this.setState({ tasks });
  }


  deleteTask = id => {
    let { tasks } = this.state;
    // формируется массив из idшек тасок ... берем индекс нужного id
    let index = tasks.map(task => task.id).indexOf(id);

    tasks.splice(index, 1);
    this.setState({ tasks });
  }



  render() {
    let { tasks } = this.state;
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