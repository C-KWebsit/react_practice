import React, { Component } from 'react'

export default class Exercise2 extends Component {
    state = {

        currenInput: '',
        finalInput : ''
    
    }

    handleInputChange = (e) => {
        // console.log("hello")
        console.log(e)
        this.setState({
            currentInput: e.target.value
        });

    };

    getState = () => {
        
        this.setState({finalInput : this.state.currentInput})
    }

    render() {
        return (
            <div>
                <div className="exercise-box2">
                Exercise 2: Create a component that will accept user input as a field when the user clicks a submit button populate that text in the component with Blue text.<br/>
                <form>
                    <input
                    type="text"
                    style={{color:"blue"}}
                    onChange={this.handleInputChange}
                    >
                    </input><br/>

                    <button className="exercise-2-button" type="button"
                    onClick={this.getState}> 
                    Submit!
                    </button>
                </form>
                 <h3 style={{color:"blue"}}>{this.state.finalInput}</h3>
                </div>
               
                
            </div>
        )
    }
}
