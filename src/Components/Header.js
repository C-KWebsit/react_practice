import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className="main-header">
                <NavLink exact activeClassName="selected" to="/signIn">
                    Sign-In
                </NavLink>
                <NavLink exact activeClassName="selected" to="/registerHere">
                    Register Here!
                </NavLink>
                <NavLink exact activeClassName="selected" to="/playground">
                    PlayGround!
                </NavLink>
                <h1>Cici and Kyle React Playground!</h1>
            </div>
        )
    }
}
