import React from 'react';

const Login = () => {
    const [user, setUser] = React.useState({
        name: "", email: ""
    })
    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(user);

    }
    return (
        <div>
            <h3>Event Validation</h3>
            <form className='grid grid-cols-1 p-5 rounded border gap-5 mb-20' onSubmit={handleForm}>
                <input className='input' type="text" placeholder='Type Your email' onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <input className='input' type="email" placeholder='Type Your Name' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <button className='btn'>Submit</button>

            </form>

        </div>
    );
};

export default Login;