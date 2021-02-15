import React, { Component } from 'react'

export default class Exercise7 extends Component {
    state = { 
        userInput: '',
        
    }

    handleInput = (e) => { 
        console.log(e.target.value)
        this.setState({ 
            userInput: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className="exercise-box6">
                Create a component that will accept user input as a field when 
                the user clicks a submit button populate that text in the parent component.
                <br/>
                <br/>
                <input type="text"
                onChange={this.handleInput}/>
                <br/>
                <button className="exercise-6-button"
                onClick={() => this.props.handleUserSubmission(this.state.userInput)}>Submit!</button>
                </div>
                
            </div>
        )
    }
}
