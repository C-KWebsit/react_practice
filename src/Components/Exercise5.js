import React, { Component } from 'react'

export default class Exercise5 extends Component {

    state = { 
        color: "#FF90B3"
    }

    render() {
        return (
            <div>
                <div className="exercise-box5" style={{backgroundColor: this.state.color}}>
                Create a component that will provide the user with a drop down menu of colors. 
                once the user selects a color change the background color of the Parent component. 
                <br/>
                <select className="exercise-5-button"
                onChange={this.props.handleDropDownChange}>
                    <option value="#E0E0E2">Default</option>
                    <option value="#00A5E0">Blue</option>
                    <option value="#DE639A">Pink</option>
                    <option value="#04724D">Green</option>
                    <option value="#5F4BB6">Purple</option>
                </select>
                </div>
                
            </div>
        )
    }
}
