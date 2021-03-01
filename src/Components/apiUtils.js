import request from "superagent";


// const URL = 'https://agile-badlands-99697.herokuapp.com';

const URL = 'http://localhost:3000'

export async function getAllExercises() { 

    const response = await request.get(`${URL}/playground`)

    return response.body;
}

