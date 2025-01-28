// MergeSortVisualizer.js
import React, { useState } from 'react';
import './MergeSortVisualizer.css';

function MergeSortVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState({ low: -1, mid: -1, high: -1 });

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setCurrentStep({ low: -1, mid: -1, high: -1 });
    };

    const mergeSort = async (arr, l, r) => {
        if (l < r) {
            const m = Math.floor((l + r) / 2);
            setCurrentStep({ low: l, mid: m, high: r });

            await mergeSort(arr, l, m);
            await mergeSort(arr, m + 1, r);
            await merge(arr, l, m, r);
        }
    };

    const merge = async (arr, l, m, r) => {
        const n1 = m - l + 1;
        const n2 = r - m;
        const L = arr.slice(l, m + 1);
        const R = arr.slice(m + 1, r + 1);

        let i = 0, j = 0, k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            setArray([...arr]);
            setCurrentStep({ low: l, mid: m, high: r });
            await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500));
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 500));
        }
    };

    const startMergeSort = () => {
        const arr = [...array];
        mergeSort(arr, 0, arr.length - 1);
    };

    return (
        <div className="merge-sort-visualizer">
            <h3>Merge Sort Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
                value={inputValue}
                onChange={handleChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <button onClick={startMergeSort}>Start Merge Sort</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index >= currentStep.low && index <= currentStep.high ? 'merging' : ''
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

export default MergeSortVisualizer;
