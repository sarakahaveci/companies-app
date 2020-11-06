import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/pages/Button';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Companies from './components/pages/Companies';
import './App.css';

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component= {Home}/>
                    <Route path='/Companies' component= {Companies}/>
                </Switch>
            </Router>

        </>
    );
}

export default App;
