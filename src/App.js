import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  
    return (
        <>
        <Router>   
        <Navbar/>
        <Switch>
        <Route path='/' exact />
        </Switch>
            <h1>welcome</h1>
            </Router>
            </>
    );
}

export default App;
