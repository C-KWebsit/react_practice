import React, { Component } from 'react'

export default class ExerciseItem extends Component {

    render() {
        return (
            <div>
               <div className="exercise-item">
                   <div>Title: {this.props.exerciseProp.title}</div>
                   <div>Category: {this.props.exerciseProp.category}</div>
                   <div>Prompt: {this.props.exerciseProp.prompt}</div>
               </div> 
            </div>
        )
    }
}
