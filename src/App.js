import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import './App.scss';
import dataTasks from './data/tasks.json';

const LOCALSTORAGE_KEY = 'someJson';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: []
    }
  }
  
  componentWillMount () {
    this.loadJson()
  }


  validateJson () {
    let validJson;
    try {
      validJson = JSON.stringify(this.state.json)
    } catch(e) {
      throw e
    }
    return validJson;
  }


  loadJson = () => {
    let json = window.localStorage.getItem(LOCALSTORAGE_KEY) || dataTasks;
    this.setState({ json: JSON.parse(json) })
  }


  saveJson = () => {
    const validJson = this.validateJson();
    if (!validJson) return;
    
    window.localStorage.setItem(
      LOCALSTORAGE_KEY,
      validJson
    )
  }


  addTask = task => {
    let { json: tasks } = this.state;
    tasks.push({
      id: dataTasks.lenght !== 0 ? task.length : 0,
      title: task,
      done: false
    })
    
    this.setState({ tasks });
    this.saveJson();
  }


  doneTask = id => {
    let { json: tasks } = this.state;
    let index = tasks.map(task => task.id).indexOf(id);
    
    tasks[index].done = true;
    this.setState({ tasks });
    this.saveJson();
  }


  deleteTask = id => {
    let { json: tasks } = this.state;
    // формируется массив из idшек тасок ... берем индекс нужного id
    let index = tasks.map(task => task.id).indexOf(id);

    tasks.splice(index, 1);
    this.setState({ tasks });

    this.saveJson();
  }




  render() {
    let tasks = this.state.json;
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