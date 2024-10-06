import React from 'react';

type nayokDemo = {
    nayoks: {
        name: string;
        age: number;
        movies: string[];
    }[]
}

const Nayok = ({ nayoks }: nayokDemo) => {
    return (
        <div>
            <h2>Total Nayoks: {nayoks.length}</h2>

        </div>
    );
};

export default Nayok;