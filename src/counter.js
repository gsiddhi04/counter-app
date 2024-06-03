import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;

