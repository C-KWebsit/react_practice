import React, { Component } from 'react'

export default class Exercise6 extends Component {

    state = { 
        color: "cyan"
    }

    render() {
        return (
            <div>
                <div className="exercise-box6" style={{backgroundColor: this.state.color}}>
                Create a component that will provide the user with three radio buttons and a submit button. 
                once the user selects a radio button, change the background color of the parent component.
                <br/>
                <br/>
                <input 
                type="radio" 
                value="Red" 
                name="colors"
                onChange={this.props.handleRadioButton}/>Red

                <input 
                type="radio" 
                value="Orange" 
                name="colors"
                onChange={this.props.handleRadioButton}/>Orange

                <input type="radio" 
                value="Black"
                name="colors"
                onChange={this.props.handleRadioButton}/>Black

                <br/>
                <button className="exercise-6-button"
                onClick={this.props.handleFinalButtonChange}>Submit!</button>
                </div>
                
            </div>
        )
    }
}
