import { useState } from "react";
import "./AddUser.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredUsername, enteredAge)
    setEnteredUsername("");
    setEnteredAge("");
  };

  const changeUsername = (event) => {
    setEnteredUsername(event.target.value);
  };

  const changeUserage = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div className="wrapper-form">
      <form onSubmit={addUserHandler} >
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={changeUsername}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={changeUserage}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
