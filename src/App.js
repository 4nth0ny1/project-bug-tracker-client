import './App.css';
import React, { useState } from 'react';
import Axios from 'axios';

function App() {

  // here are the useState hooks to set the username and password 
  const [ usernameValue, setUsernameValue ] = useState('');
  const [ passwordValue, setPasswordValue ] = useState('');

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const [ loginStatus, setLoginStatus ] = useState('');

  // this is the post route to update the database
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameValue, 
      password: passwordValue,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username, 
      password: password,
    }).then((response) => {
      if (response.data.message){
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsernameValue('')
    setPasswordValue('')
    setPassword('')
    setUsername('')
  }
  
  // returning the table jsx code
  return (
    <div className="App">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="create-account">
          <h1>Create Account</h1>
          <input type="text" className="input" placeholder="Username..." onChange={(e) => {setUsernameValue(e.target.value)}}/>
          <input type="password" className="input" placeholder="Password..." onChange={(e) => {setPasswordValue(e.target.value)}}/>
          <button onClick={register}>Create Account</button>
        </form>
        <form onSubmit={handleSubmit} className="login">
          <h1>Login</h1>
          <input type="text" className="input" placeholder="Username..." onChange={(e) => {setUsername(e.target.value)}}/>
          <input type="text" className="input" placeholder="Password..." onChange={(e) => {setPassword(e.target.value)}}/>
          <button onClick={login}>Login</button>
        </form>
        <h1>{loginStatus}</h1>
      </div>
    </div>
  );
}

export default App;
