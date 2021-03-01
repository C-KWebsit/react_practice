import React, { Component } from 'react'
import ExerciseItem from './ExerciseItem'

export default class ExerciseList extends Component {
    render() {
        return (
            <div>
               <div className="exercise-divs"> 
                   {this.props.filterExercises.map(singleExercise => <ExerciseItem
                    key={singleExercise.id}
                    exerciseProp={singleExercise}
                    />)}
                </div> 
            </div>
        )
    }
}
