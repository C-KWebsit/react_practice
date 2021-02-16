import React, { Component } from 'react'


export default class RegisterPage extends Component {

    state = { 
            newName: '',
            username: '',
            email: '', 
            password: '', 
            reEnter: '', 
            security_q: '',
            security_a: ''
    }

    getUserInfo = (e) => { 
        console.log(this.state)
        console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    shipUserInfo=()=>{

        let allUsers = JSON.parse(localStorage.getItem("USERS")) //defining allUsers in localStorage and getting item "USERS"
        
        if (this.state.password !== this.state.reEnter){
            // prompt the user to reenter the passwords
            alert('Uh oh! Your passwords do not match, please try again.')
            this.setState({
                password: '',
                reEnter: ''
            })
            return;
        }

        if (!allUsers) {//if there is no such thing as an allUsers object, set the item in local storage and create an empty object for the future users that will go in allUsers
            localStorage.setItem("USERS", JSON.stringify({}))
            allUsers = {}
            allUsers[this.state.username] = this.state
            localStorage.setItem("USERS", JSON.stringify(allUsers))
            alert('Welcome! You are now registered!')
            return window.location= './signIn'
        }

        if (allUsers[this.state.username]) {
            alert('Uh oh! Someone already has this username, please make a new one.')
            return window.location='./registerHere';
        } else {
            allUsers[this.state.username] = this.state
            localStorage.setItem("USERS", JSON.stringify(allUsers))
            alert('Welcome! You are now registered!')
            window.location= './signIn'
        }

    }


    render() {
        return (
            <div>
                <form className="form-register"> 
                <h3>Please Register Here!</h3>
                    <input id="newName" type="text" placeholder="Enter Name" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <input id ="username" type="text" placeholder="Create a Username" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <input id ="email" type="text" placeholder="Enter Email" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <input id ="password" type="text" value={this.state.password} placeholder="Create New Password" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <input id ="reEnter" type="text" value={this.state.reEnter} placeholder="Re-Enter Password" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <select id="security_q"className="select-box"
                    onChange={(e)=> this.getUserInfo(e)}>
                        <option>What city were you born in?</option>
                        <option>What is your childhood best friend's name?</option>
                        <option>What is your mother's maiden name?</option>
                        <option>Who is your favorite super hero? </option>
                    </select>
                    <input id= "security_a" type="text" placeholder="Security Answer" className="input-boxes" onChange={(e)=> this.getUserInfo(e)}></input><br/>
                    <button type="button" onClick={()=>this.shipUserInfo()}>Register!</button>
                </form>
                
            </div>
        )
    }
}
