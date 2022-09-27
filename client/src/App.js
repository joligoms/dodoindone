import './App.css';
import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';

const API_HOST = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_URL = `${API_HOST}:${API_PORT}`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []); 

  const createTask = (event) => {
    fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({newTask})
    })
      .then((response) => response.json())
      .then((createdTask) => {
        setTasks(prev => [...prev, createdTask]);
        setNewTask('');
      })
      .catch(err => console.log(err));
    
    event.preventDefault();
  }
  
  return (
    <div className="App">
      <header className="App-main">
        <TaskForm 
          newTask={newTask} 
          onSubmit={createTask}
          onTextChange={({target: {value}}) => setNewTask(value)} 
        />
        <ul>
          {
            tasks.map(task => (
              <li key={task.id}>{task.description}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
