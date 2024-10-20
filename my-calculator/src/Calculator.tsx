// src/Calculator.tsx
import React, { useState } from 'react';
import './Calculator.css'; // Optional for styling

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('');
    const [history, setHistory] = useState<string[]>([]); // To hold the history of inputs

    const handleClick = (value: string) => {
        setHistory((prevHistory) => [...prevHistory, input]); // Save current input to history
        setInput((prevInput) => prevInput + value);
    };

    const clearInput = () => {
        setInput('');
        setResult('');
        setHistory([]); // Clear history on reset
    };

    const calculateResult = () => {
        try {
            // Caution: eval can be dangerous if used with untrusted input
            const evalResult = eval(input);
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    const undoLastInput = () => {
        if (history.length > 0) {
            setInput(history[history.length - 1]); // Restore last input from history
            setHistory((prevHistory) => prevHistory.slice(0, -1)); // Remove last input from history
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')}>+</button>
                <button onClick={() => handleClick('4')}>4</button>
                <button onClick={() => handleClick('5')}>5</button>
                <button onClick={() => handleClick('6')}>6</button>
                <button onClick={() => handleClick('-')}>-</button>
                <button onClick={() => handleClick('7')}>7</button>
                <button onClick={() => handleClick('8')}>8</button>
                <button onClick={() => handleClick('9')}>9</button>
                <button onClick={() => handleClick('*')}>*</button>
                <button onClick={() => handleClick('0')}>0</button>
                <button onClick={() => handleClick('.')}>.</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={clearInput}>C</button>
                <button onClick={undoLastInput}>Undo</button> {/* Undo button */}
            </div>
        </div>
    );
};

export default Calculator;
