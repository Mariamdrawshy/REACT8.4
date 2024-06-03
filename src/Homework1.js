import React, { useState } from 'react';
import './Homework1.css';

const Homework1 = () => {
    const colors = ['black', 'red', 'orange', 'yellow', 'green'];
    const [number, setNumber] = useState(0);

    const increaseNumber = () => {
        setNumber((number + 1) % 5);
    };

    return (
        <div className="homework1-container">
            <h2 style={{ color: colors[number] }}>{number}</h2>
            <button onClick={increaseNumber}>+</button>
        </div>
    );
};

export default Homework1;
