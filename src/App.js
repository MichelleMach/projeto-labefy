import React from 'react';
import './App.css';
import Playlists from "./pages/playlists/Playlists"
import Tracks from "./pages/tracks/Tracks"
import Login from "./pages/login/Login"
import Router from './router/Router';

export default class App extends React.Component {

  render() {

  
    return (
      
      <div>
        <Router />
      </div>
    );

  }
  
}

