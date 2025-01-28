// SelectionSortVisualizer.js
import React, { useState } from 'react';
import './SelectionSortVisualizer.css';

function SelectionSortVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState({ i: -1, j: -1, minIndex: -1 });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setCurrentStep({ i: -1, j: -1, minIndex: -1 });
    };

    const selectionSort = async () => {
        const arr = [...array];
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                setCurrentStep({ i, j, minIndex });
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                    setCurrentStep({ i, j, minIndex });
                }
                await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay
            }
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            setArray([...arr]);
        }
        setCurrentStep({ i: -1, j: -1, minIndex: -1 });
    };

    return (
        <div className="selection-sort-visualizer">
            <h3>Selection Sort Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <button onClick={selectionSort}>Start Selection Sort</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index === currentStep.minIndex ? 'min-element' :
                            index < currentStep.i ? 'sorted' : ''
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

export default SelectionSortVisualizer;
