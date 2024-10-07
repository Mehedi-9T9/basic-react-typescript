import React from 'react';

// type userProps = {
//     name: string,
//     status: string
// }
const CreateUser = () => {
    const [user, setUser] = React.useState({ name: "", status: "" })
    const handleUser = () => {
        setUser({ name: "mehedi", status: "Student" })
    }
    return (
        <>
            <div className='bg-red-400 p-5 rounded border'>
                <h2>Name: {user.name}</h2>
                <p>Status: {user.status}</p>

            </div>
            <button className='px-5 py-2 rounded bg-red-300 text-black' onClick={handleUser}>Increment</button>
        </>

    );
};

export default CreateUser;