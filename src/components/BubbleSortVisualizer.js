import React, { useState } from 'react';
import './BubbleSortVisualizer.css';

function BubbleSortVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState({ i: -1, j: -1 });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setCurrentStep({ i: -1, j: -1 });
    };

    const bubbleSort = async () => {
        const arr = [...array];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                setCurrentStep({ i, j });
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    setArray([...arr]);
                    await new Promise((resolve) => setTimeout(resolve, 2000)); // Animation delay
                }
            }
        }
        setCurrentStep({ i: -1, j: -1 });
    };

    return (
        <div className="bubble-sort-visualizer">
            <h3>Bubble Sort Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <button onClick={bubbleSort}>Start Bubble Sort</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index === currentStep.j || index === currentStep.j + 1
                                ? 'comparing'
                                : index >= array.length - currentStep.i
                                ? 'sorted'
                                : ''
                        }`}
                        style={{ height: `${value * 5}px` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BubbleSortVisualizer;
