import React, { Component } from 'react';
import request from 'superagent';
import { getAllExercises } from './apiUtils.js' 
import ExerciseList from './ExerciseList.js';

export default class Playground2 extends Component {

    state = { 

        exerciseData: [],

    }

    componentDidMount = async () => { 
        
        // const data = await request.get()
        const data = await request.get(`http://localhost:3000/playground`);
        // getAllExercises();

        this.setState({
            exerciseData: data.body
        })
    }

    filterExercises = async () => { 
        // const data = await getAllExercises();
        const data = await request.get(`http://localhost:3000/playgroud`)
        // console.log(await request.get(`http://localhost:3000/playgroud`))
        return data.body;
    }

    render() {
        return (
            <div>
                <ExerciseList
                filterExercises={this.state.exerciseData}/>
            </div>
        )
    }
}
