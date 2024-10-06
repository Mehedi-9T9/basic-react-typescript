interface user {
    name: string,
    age: number,
    isMarried: boolean,
    movies: string[]
}

// const Person = ({ name }: { name: string }) => {
const Person = ({ person }: { person: user }) => {
    return (
        <div className="borde rounded bg-red-300">
            <h2 className='mt-4'>Name: {person.name}</h2>
            <h2 className='mt-4'>Age: {person.age}</h2>
            <h2 className='mt-4'>Merital status: {person.isMarried.toString()}</h2>
            <h2 className='mt-4'>Movies: {person.movies[0]},{person.movies[0]}</h2>
        </div>
    );
};

export default Person;