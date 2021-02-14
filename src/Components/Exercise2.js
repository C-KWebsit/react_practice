import React, { Component } from 'react'

export default class Exercise2 extends Component {
    state = {

        input: ''
    
    }

    handleInputChange = (userInput) => {
        console.log('hello, you got this!')
        this.setState({
            input: userInput
        })

    }


    render() {
        return (
            <div>
                <div className="exercise-box2">
                Exercise 2: Create a component that will accept user input as a field when the user clicks a submit button populate that text in the component with Blue text.<br/>

                <input style={{color: this.state.input}}></input><br/>

                <button
                className="exercise-2-button"
                onClick={() => this.handleInputChange()}>Submit!</button>
                </div>
                
            </div>
        )
    }
}
