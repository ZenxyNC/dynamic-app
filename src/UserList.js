// src/UserList.js
import React, { useEffect, useState } from 'react';
import { db } from './firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const usersList = snapshot.docs.map(doc => doc.data());
      setUsers(usersList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
