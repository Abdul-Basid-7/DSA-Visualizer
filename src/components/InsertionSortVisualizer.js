
import React, { useState } from 'react';
import './InsertionSortVisualizer.css';

function InsertionSortVisualizer() {
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

    const insertionSort = async () => {
        const arr = [...array];
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;
            setCurrentStep({ i, j });

            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
                setArray([...arr]);
                setCurrentStep({ i, j });
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Animation delay
            }
            arr[j + 1] = key;
            setArray([...arr]);
        }
        setCurrentStep({ i: -1, j: -1 });
    };

    return (
        <div className="insertion-sort-visualizer">
            <h3>Insertion Sort Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <button onClick={insertionSort}>Start Insertion Sort</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index === currentStep.i ? 'current' :
                            index <= currentStep.i ? 'sorted' : ''
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

export default InsertionSortVisualizer;
