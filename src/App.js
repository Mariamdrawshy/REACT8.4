import React from 'react';
import './App.css';
import Homework1 from './Homework1';
import Homework2 from './Homework2';

const App = () => {
    return (
        <div className="App">
            <h1>React Project</h1>
            <div>
                <h2>Q1</h2>
                <Homework1 />
            </div>
            <div>
                <h2>Q2</h2>
                <Homework2 />
            </div>
        </div>
    );
};

export default App;
