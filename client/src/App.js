import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import Axios from 'axios';

// Components
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
    <Router>
      <div className="App">
        <Switch>
          {/* <PrivateRoute exact path='/protected' component={MainPage} /> */}
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
        </Switch>
        {/* <SignupForm /> */}
        {/* <LoginForm /> */}
      </div>
    </Router>
  );
}

export default App;
