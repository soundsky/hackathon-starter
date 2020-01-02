import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
