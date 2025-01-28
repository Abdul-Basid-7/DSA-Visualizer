// QueueVisualizer.js
import React, { useState } from 'react';
import './QueueVisualizer.css';

function QueueVisualizer() {
    const [queue, setQueue] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const enqueue = () => {
        if (inputValue) {
            setQueue([...queue, inputValue]);
            setInputValue('');
        }
    };

    const dequeue = () => {
        if (queue.length > 0) {
            setQueue(queue.slice(1));
        }
    };

    return (
        <div className='background'>
            <div className="queue-visualizer">
            <h3>Queue Visualization</h3>
            <input
                type="text"
                placeholder="Enter value to enqueue"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={enqueue}>Enqueue</button>
            <button onClick={dequeue} disabled={queue.length === 0}>Dequeue</button>
            <div className="queue-container">
                {queue.map((value, index) => (
                    <div key={index} className="queue-item">
                        {value}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default QueueVisualizer;
