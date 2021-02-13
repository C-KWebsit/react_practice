import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom';

export default withRouter (class Header extends Component {
    render() {
        return (
            <div className="main-header">
                {
                    this.props.location.pathname !== '/signIn'
                        &&<NavLink exact activeClassName="selected" to="/signIn" className="nav-link">
                    Sign-In
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/registerHere'
                        && <NavLink exact activeClassName="selected" to="/registerHere" className="nav-link">
                    Register Here!
                </NavLink>
                }
                {
                    this.props.location.pathname !== '/playground'
                        && <NavLink exact activeClassName="selected" to="/playground" className="nav-link">
                    PlayGround!
                </NavLink>
                }
                <h1>Cici and Kyle React Playground!</h1>
            </div>
        )
    }
})
