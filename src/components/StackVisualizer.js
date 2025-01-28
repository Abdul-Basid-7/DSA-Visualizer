// StackVisualizer.js
import React, { useState } from 'react';
import './StackVisualizer.css';

function StackVisualizer() {
    const [stack, setStack] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const pushToStack = () => {
        if (inputValue) {
            setStack([...stack, inputValue]);
            setInputValue('');
        }
    };

    const popFromStack = () => {
        setStack(stack.slice(0, -1));
    };

    return (
        <div className="stack-visualizer">
            <h3>Stack Visualization</h3>
            <input
                type="text"
                placeholder="Enter value to push"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={pushToStack}>Push</button>
            <button onClick={popFromStack} disabled={stack.length === 0}>Pop</button>
            <div className="stack-container">
                {stack.map((value, index) => (
                    <div key={index} className="stack-item">
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StackVisualizer;
