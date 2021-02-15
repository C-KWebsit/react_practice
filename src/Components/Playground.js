import React, { Component } from 'react'
import Exercise1 from './Exercise1.js';
import Exercise2 from './Exercise2.js'
import Exercise3 from './Exercise3.js';

export default class Playground extends Component {
    state = { //here we set the initial state of our Playground background color to a pink color...we want this to change
        color: "#F48668" 
    }
    
    handleColorChange = () => { 
        //this function should be invoked when user hits a button,  call back function that takes in one parameter (col),
        //we are setting the State to change on click to the color defined in the onClick event listener.
        //We are going to pass this function DOWN TO EXERCISE1.js
        this.setState({
            color: "#E3B505"
        });
    }
    
    render() {
        return (
            <div //inline styling is dynamically changed by using this.state.color...you can also just hard-code a color
            style={{backgroundColor: this.state.color}}> 
                <h1>Welcome to Our Playground!</h1>
                    <Exercise1 //here we are sending the handleColorChange call back function as a prop...we defined setState to yellow
                        handleColorChange={this.handleColorChange}/>   
                    <Exercise2/>
                    <Exercise3/>
            </div>
        )
    }
}

