import React from 'react';
import Person from './Person';

const Home = () => {
    const person = {
        name: "Mehedi Hasan",
        age: 24,
        isMarried: false,
        movies: ["dhakar king", "chanku mama"]
    }
    return (
        <div>
            <h2 className='text-3xl font-bold mt-4'>Props Type Validation</h2>
            {/* <Person name="Mehedi Hasan"></Person> */}
            <Person person={person}></Person>
        </div>
    );
};

export default Home;