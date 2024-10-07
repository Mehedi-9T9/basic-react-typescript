import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    // setCount("3") show error beacuse this is number of state
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button className='px-5 py-2 rounded bg-red-300 text-black' onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    );
};

export default Counter;