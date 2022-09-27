import './App.css';
import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskPanel from './components/TaskPanel/TaskPanel';
import TaskCard from './components/Task/TaskCard';

const API_HOST = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_URL = `${API_HOST}:${API_PORT}`;

function App() {
  const [doTasks, setDoTasks] = useState([]);
  const [doinTasks, setDoinTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/tasks`)
      .then(res => res.json())
      .then(data => {
        setDoTasks(data.do);
        setDoinTasks(data.doin);
        setDoneTasks(data.done);
      });
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
        setDoTasks(prev => [...prev, createdTask]);
        setNewTask('');
      })
      .catch(err => console.log(err));
    
    event.preventDefault();
  }

  const deleteTask = (task) => {
    fetch(`${API_URL}/tasks/${task.id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        // Uggly temporary code here (and in pretty much the whole App.js lmao)
        switch (task.statusId) {
          case 1: // Do
            setDoTasks(prev => prev.filter(taskItem => taskItem.id !== task.id));
            break;

          case 2: // Doin
            setDoinTasks(prev => prev.filter(taskItem => taskItem.id !== task.id));
            break;

          case 3: // Done
            setDoneTasks(prev => prev.filter(taskItem => taskItem.id !== task.id));
            break;
          
          default:
        }

        console.log(data)
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <TaskForm 
            newTask={newTask} 
            onSubmit={createTask}
            onTextChange={({target: {value}}) => setNewTask(value)} 
          />
        </header>
        <main className="App-main">
          <TaskPanel title="Do">
            {
              doTasks.map(task => (
                <TaskCard 
                  key={task.id} 
                  text={task.description} 
                  onDelete={() => deleteTask(task)}
                />
              ))
            }
          </TaskPanel>
          <TaskPanel title="Doin'...">
            {
              doinTasks.map(task => (
                <TaskCard 
                  key={task.id} 
                  text={task.description} 
                  onDelete={() => deleteTask(task)}
                />
              ))
            }
          </TaskPanel>
          <TaskPanel title="Done!">
            {
              doneTasks.map(task => (
                <TaskCard 
                  key={task.id} 
                  text={task.description} 
                  onDelete={() => deleteTask(task)}
                />
              ))
            }
          </TaskPanel>
        </main>
      </div>
    </div>
  );
}

export default App;
