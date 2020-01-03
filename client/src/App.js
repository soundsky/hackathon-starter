import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Axios from 'axios';

// Components
<<<<<<< HEAD
// import SignupForm from './components/SignupForm';
=======
import PrivateRoute from './components/PrivateRoute';
import SignupForm from './components/SignupForm';
>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f
import LoginForm from './components/LoginForm';
import NavbarHeader from './components/NavbarHeader';

function App() {
  // useEffect(() => {
  //   const post = async () => {
  //     try {
  //       const res = await Axios.post("/signup")

  //       console.log('res.data', res.data)

  //     } catch (error) {
  //       console.log('res.data error', error)
  //     }
  //   }
  //   post()
  // }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
<<<<<<< HEAD
          <NavbarHeader />
          {/* <PrivateRoute exact path='/protected' component={MainPage} /> */}
=======
          {/* <PrivateRoute exact path='/protected' component={PlaylistsView} /> */}
>>>>>>> df7dcdacdb2c63274ca2ce7ad74ce60513957c9f
          <Route path='/login' component={LoginForm} />
          <Route component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
        </Switch>
        {/* <SignupForm /> */}
        {/* <LoginForm /> */}

      </div>
    </Router>
  );
}

export default App;
