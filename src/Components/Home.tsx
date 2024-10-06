import React from 'react';
import Person from './Person';
import Nayok from './Nayok';

const Home = () => {
    const person = {
        name: "Mehedi Hasan",
        age: 24,
        isMarried: false,
        movies: ["dhakar king", "chanku mama"]
    }

    const nayoks = [
        {
            name: "shakib khan",
            age: 30,
            movies: ["dhakar king", "chachu", 'hero the super start']
        },
        {
            name: "Amir khan",
            age: 30,
            movies: ["Dhoom 3", "pk"]
        },
        {
            name: "Shahrukh khan",
            age: 30,
            movies: ["Channai express", "janina"]
        },
    ]
    return (
        <div>
            <h2 className='text-3xl font-bold mt-4'>Props Type Validation</h2>
            {/* <Person name="Mehedi Hasan"></Person> */}
            <Person person={person}></Person>
            <Nayok nayoks={nayoks}></Nayok>
        </div>
    );
};

export default Home;