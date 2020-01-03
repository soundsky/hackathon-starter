import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Axios from 'axios';
import TracksPage from './components/TracksPage'
// Components
import PrivateRoute from './components/PrivateRoute';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import NavbarHeader from './components/NavbarHeader';
import PlaylistsView from './components/PlaylistsView';
import HomePage from './components/HomePage';

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
        <NavbarHeader />
        {/* <TracksPage/> */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/tracks' component={TracksPage} />
          {/* <PrivateRoute exact path='/protected' component={PlaylistsView} /> */}
          <Route path='/login' component={LoginForm} />
          <Route path='/playlists' component={PlaylistsView} />
          <Route path='/signup' component={SignupForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
