import React, { Component } from 'react'

export default class Exercise4 extends Component {

    state = { 

        color: "#7389AE",
        radios: '',
        finalRadio: ''

    }

    handleRadioButtonChange = (e) => { 
        
        this.setState({
            radios: e.target.value
        })

    }

    getFinalRadio = () => { 
        this.setState({
            finalRadio: this.state.radios
        })
    }

    render() {
        return (
            <div>
                <div style={{backgroundColor: this.state.color}} className="exercise-box4">
                Create an component that contains 3 radio buttons and a submit button. Each option can be a topic of your choice. when the user clicks the submit button print the selection to the container
                <br/>
                <br/>
                <input 
                type="radio" 
                value="Colorado" 
                name="states"
                onChange={this.handleRadioButtonChange}/>Colorado

                <input 
                type="radio"
                 value="Oregon" 
                 name="states"
                 onChange={this.handleRadioButtonChange}/>Oregon

                <input
                type="radio"
                value="Arizona" 
                name="states"
                onChange={this.handleRadioButtonChange}/>Arizona 

                <br/>
                <button className="exercise-4-button"
                onClick={this.getFinalRadio} >Submit!</button>
                <p style={{color:"#7DCFB6"}}>{this.state.finalRadio}</p>
                </div>
                
            </div>
        )
    }
}
