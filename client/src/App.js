import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  useEffect(() => {
    const post = async () => {
      try {
        const res = await Axios.post("/signup")

        console.log('res.data', res.data)

      } catch (error) {
        console.log('res.data error', error)
      }
    }
    post()
  }, [])
  return (
    <div className="App">
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;
