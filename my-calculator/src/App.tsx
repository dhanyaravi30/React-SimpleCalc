// src/App.tsx
import React from 'react';
import Calculator from './Calculator';

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>React</h1>
            <h2>SIMPLE CALCULATOR</h2>
            <Calculator />
        </div>
    );
};

export default App;
