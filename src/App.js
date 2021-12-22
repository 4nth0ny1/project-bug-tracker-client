import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  // here are the useState hooks to set the username and password 
  const [ usernameValue, setUsername ] = useState('');
  const [ passwordValue, setPassword ] = useState('');

  // this is the post route to update the database
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameValue, 
      password: passwordValue,
    }).then((response) => {
      console.log(response);
    });
  };
  
  // returning the table jsx code
  return (
    <div className="App">
      <div className="create-account">
        <h1>Create an Account</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => {setUsername(e.target.value)}}/>
        <label>Password</label>
        <input type="text" onChange={(e) => {setPassword(e.target.value)}}/>
        <button onClick={register}>Create Account</button>
      </div>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username..." />
        <input type="password" placeholder="Password..." />
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
