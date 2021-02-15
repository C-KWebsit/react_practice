import React, { Component } from 'react'

export default class SigninPage extends Component {
    render() {
        return (
            <div>
                <form className="form-sign-in"> 
                    <label>Please Sign-In Here!</label><br/>
                    <input placeholder="Username"></input><br/>

                    <input placeholder="Password"></input><br/>
                    <button>Sign-In!</button>
                </form>
            </div>

        )
    }
}
