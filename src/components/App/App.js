import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import PurposePage from '../pages/PurposePage';
import CreatePage from '../pages/CreatePage';
import AppPage from '../pages/AppPage';
import './App.css';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={MainPage} />
        <Route path='/Purpose' component={PurposePage} />
        <Route path='/Create' component={CreatePage} />
        <Route path='/App' component={AppPage} />
      </Router>
    </div>
  );
}
