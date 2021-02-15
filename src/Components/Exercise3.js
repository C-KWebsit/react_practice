import React, { Component } from 'react'

export default class Exercise3 extends Component {

    state = { 
        color1 : "#E0E0E2"
        
    }

    handleDropDownColors(col){ 
        // console.log(col.target)
        this.setState({
            color1 : col.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="exercise-box3" style={{backgroundColor: this.state.color1}}> Exercise 3: Create a component that will provide the user with a drop down menu of colors. Once the user selects a color change the background color of the exercise container!<br/>

                <select className="exercise-3-button" onChange={(col) => this.handleDropDownColors(col)}>
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
