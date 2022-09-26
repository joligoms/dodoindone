import './App.css';
import { useEffect, useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL;
const API_PORT = process.env.REACT_APP_API_PORT;

function App() {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}:${API_PORT}/statuses`)
      .then(res => res.json())
      .then(data => setStatuses(data));
  }, []); 
  
  return (
    <div className="App">
      <header className="App-main">
        { statuses.map(status => (
          <h1>{ status.description }</h1>
        )) }
      </header>
    </div>
  );
}

export default App;
