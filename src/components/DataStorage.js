const LOCALSTORAGE_KEY = 'tasksJson';

class DataStorage {
  constructor(defaultTasks) {
    this.data = defaultTasks;
  }


  validateJson (tasks) {
      let validJson;
      try {
        //object to json string
        validJson = JSON.stringify(tasks)
      } catch(e) {
        throw e
      }
      return validJson;
    }


  loadJson = () => {
    // json string to object
    let storageData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY));
    if(storageData.length !== 0) {
      this.data = storageData;
    }
    return this.data;
  }


  saveJson = (tasks) => {
    const validJson = this.validateJson(tasks);
    if (!validJson) return;
    
    window.localStorage.setItem(
      LOCALSTORAGE_KEY,
      validJson
    )
  }

}


export default DataStorage;