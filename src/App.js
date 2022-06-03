import { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';
import './App.css';

function App() {

  const[userList, setUserList] = useState([]);


  const AddUserFunction = (uName, uAge) => {
    setUserList((prevUserList) => {
      return[...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={AddUserFunction} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
