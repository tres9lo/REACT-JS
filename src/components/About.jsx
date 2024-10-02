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
        </div>
    );
};

export default About;
