// src/App.js
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import UserList from './UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Registry Site</h1>
        <RegistrationForm addUser={addUser} />
        <UserList users={users} />
      </header>
    </div>
  );
}

export default App;
