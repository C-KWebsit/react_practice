import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import SigninPage from './Components/SigninPage';
import RegisterPage from './Components/RegisterPage';
import PlayGround from './Components/Playground'
import Header from './Components/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header/>
                    <Switch>
                        <Route 
                            path="/signIn" 
                            exact
                            render={(routerProps) => <SigninPage {...routerProps} />} 
                        />
                        <Route 
                            path="/registerHere" 
                            exact
                            render={(routerProps) => <RegisterPage {...routerProps} />} 
                        />
                        <Route 
                            path="/playground" 
                            exact
                            render={(routerProps) => <PlayGround {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}
