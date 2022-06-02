import { useState } from "react";
import Card from "./Card";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  const changeUsername = event => {
      setEnteredUsername(event.target.value);
  };

  const changeUserage = event => {
      setEnteredAge(event.target.value);
  }

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={changeUsername} />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" onChange={changeUserage} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
