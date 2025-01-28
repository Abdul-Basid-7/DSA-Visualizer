// LinkedListVisualizer.js
import React, { useState } from 'react';
import './LinkedListVisualizer.css';

function LinkedListVisualizer() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addNode = (position) => {
        if (inputValue) {
            const newNode = { value: inputValue, key: Date.now() };
            setList(position === 'end' ? [...list, newNode] : [newNode, ...list]);
            setInputValue('');
        }
    };

    const removeNode = () => {
        setList(list.slice(1));
    };

    return (
        <div className="linked-list-visualizer">
            <h3>Linked List Visualization</h3>
            <input
                type="text"
                placeholder="Enter value to add"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={() => addNode('start')}>Add to Start</button>
            <button onClick={() => addNode('end')}>Add to End</button>
            <button onClick={removeNode} disabled={list.length === 0}>Remove from Start</button>
            <div className="linked-list-container">
                {list.map((node, index) => (
                    <div key={node.key} className="node">
                        <div className="node-value">{node.value}</div>
                        {index < list.length - 1 && <div className="arrow">→</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinkedListVisualizer;
