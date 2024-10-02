import React, { useState } from 'react';

const About = ({ initialCount = 10 }) => {
    const [count, setCount] = useState(initialCount);

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Counter: {count}</p>
            <button onClick={decrement}>Decrease</button> 
            <button onClick={increase}>Increase</button>
            <p>Hello, {name}</p>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export default About;
