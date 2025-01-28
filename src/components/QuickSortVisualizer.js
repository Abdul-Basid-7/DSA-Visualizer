// QuickSortVisualizer.js
import React, { useState } from 'react';
import './QuickSortVisualizer.css';

function QuickSortVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState({ low: -1, high: -1, pivot: -1 });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setCurrentStep({ low: -1, high: -1, pivot: -1 });
    };

    const quickSort = async (arr, low, high) => {
        if (low < high) {
            const pi = await partition(arr, low, high);
            await quickSort(arr, low, pi - 1);
            await quickSort(arr, pi + 1, high);
        }
    };

    const partition = async (arr, low, high) => {
        const pivot = arr[high];
        let i = low - 1;
        setCurrentStep({ low, high, pivot: high });

        for (let j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
                setCurrentStep({ low, high, pivot: high });
                await new Promise((resolve) => setTimeout(resolve, 3000)); // Animation delay
            }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setArray([...arr]);
        setCurrentStep({ low: -1, high: -1, pivot: -1 });
        return i + 1;
    };

    const startQuickSort = () => {
        const arr = [...array];
        quickSort(arr, 0, arr.length - 1);
    };

    return (
        <div className="quick-sort-visualizer">
            <h3>Quick Sort Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <button onClick={startQuickSort}>Start Quick Sort</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index === currentStep.pivot ? 'pivot' :
                            index >= currentStep.low && index <= currentStep.high ? 'partition' : ''
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

export default QuickSortVisualizer;
