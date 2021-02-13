import React, { Component } from 'react'

export default class Exercise1 extends Component {
    
    state = { 
        color: "#C5C392"
    
       
    }
    handleColorChange = (col) => { 
        //this function should be invoked when user hits a button,  call back function that takes in one parameter (col),
        //we are setting the State to change on click to the color defined in the onClick event listener.
        this.setState({
            color: col
        });
        
    }

    
    render() {
        return (
            <div>
                <div className="exercise-box1"
                    style={{backgroundColor: this.state.color}}>
                Exercise 1: Create a component that will hold 2 buttons 
                Expected functionality: the buttons should change the background color of the containing div. (i.e. button1 will make the background blue, button 2 will make the background red)
                store the div background color as a state which can be toggled on click event
                <button
                    onClick={()=> this.handleColorChange("#4F6D7A")}//call back function AND THEN call the handleChange function...pass one paramater as the color you would like!  CALL BACK FUNCTION IS NECESSARY HERE!!!!!
                    
                    className="exercise-1-button"> 
                    Change to Blue!</button><br/>
                <button
                    onClick={() => this.handleColorChange("#9A031E")} //call back function AND THEN call the handleChange function...pass one paramater as the color you would like!  CALL BACK FUNCTION IS NECESSARY HERE!!!!!
                 className="exercise-1-button">Change to Red!</button><br/>
                 <button
                    onClick={() => this.handleColorChange("#C5C392")}//call back function AND THEN call the handleChange function...pass one paramater as the color you would like!  CALL BACK FUNCTION IS NECESSARY HERE!!!!!
                  className="exercise-1-button">Back to Default! 
                 </button>
                </div>
            </div>
        )
    }
}
