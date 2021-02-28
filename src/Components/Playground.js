import React, { Component } from 'react'
import Exercise1 from './Exercise1.js';
import Exercise2 from './Exercise2.js'
import Exercise3 from './Exercise3.js';
import Exercise4 from './Exercise4.js';
import Exercise5 from './Exercise5.js';
import Exercise6 from './Exercise6.js';
import Exercise7 from './Exercise7.js';

export default class Playground extends Component {
    state = { //here we set the initial state of our Playground background color to a pink color...we want this to change
        color: "#F48668",
        finalColor: '',
        radios: '',
        userInput: ''
    
    }
    
    handleColorChange = () => { 
        //this function should be invoked when user hits a button,  call back function that takes in one parameter (col),
        //we are setting the State to change on click to the color defined in the onClick event listener.
        //We are going to pass this function DOWN TO EXERCISE1.js
        this.setState({
            finalColor: "#E3B505"
        });
    }
    handleDropDownChange = (col) => { 
        this.setState({ 
            finalColor: col.target.value
        })
    }

    handleRadioButton = (color) => { 
        this.setState({

            color: color.target.value

        })
    }

    handleFinalButtonChange = () => { 
        this.setState({ 

            finalColor: this.state.color
        })
    }
    
    handleUserSubmission = (e) => { 
        console.log(e)
        this.setState({ 
            userInput: e

        })
    }
    

    render() {
        return (
            <div //inline styling is dynamically changed by using this.state.color...you can also just hard-code a color
            style={{backgroundColor: this.state.finalColor}}> 
                
                    <Exercise1 //here we are sending the handleColorChange call back function as a prop...we defined setState to yellow
                        handleColorChange={this.handleColorChange}/>   
                    <Exercise2/>
                    <Exercise3/>
                    <Exercise4/>
                    <Exercise5
                        handleDropDownChange={this.handleDropDownChange}/>
                    <Exercise6
                        handleRadioButton={this.handleRadioButton}
                        handleFinalButtonChange={this.handleFinalButtonChange}/>
                    <Exercise7
                    handleUserSubmission={this.handleUserSubmission}/>
                    <p className="hidden-message">{this.state.userInput}</p>
            </div>
        )
    }
}

