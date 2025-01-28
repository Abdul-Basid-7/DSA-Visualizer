// BinarySearchVisualizer.js
import React, { useState } from 'react';
import './BinarySearchVisualizer.css';

function BinarySearchVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [left, setLeft] = useState(-1);
    const [right, setRight] = useState(-1);
    const [foundIndex, setFoundIndex] = useState(null);

    const handleArrayChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number).sort((a, b) => a - b);
        setArray(newArray);
        setCurrentIndex(-1);
        setLeft(0);
        setRight(newArray.length - 1);
        setFoundIndex(null);
    };

    const binarySearch = async () => {
        let l = 0;
        let r = array.length - 1;
        setFoundIndex(null);

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            setCurrentIndex(mid);
            setLeft(l);
            setRight(r);

            await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay

            if (array[mid] === parseInt(searchValue)) {
                setFoundIndex(mid);
                return;
            }
            if (array[mid] < parseInt(searchValue)) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        setCurrentIndex(-1);
    };

    return (
        <div className="binary-search-visualizer">
            <h3>Binary Search Visualization</h3>
            <input
                type="text"
                placeholder="Enter sorted numbers separated by commas"
                value={inputValue}
                onChange={handleArrayChange}
            />
            <button onClick={generateArray}>Generate Array</button>
            <input
                type="text"
                placeholder="Enter value to search"
                value={searchValue}
                onChange={handleSearchChange}
            />
            <button onClick={binarySearch}>Start Binary Search</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${
                            index === currentIndex ? 'current' : ''
                        } ${
                            foundIndex === index ? 'found' : ''
                        } ${
                            index >= left && index <= right ? 'in-range' : ''
                        }`}
                        style={{ height: `${value * 5}px` }}
                    >
                        {value}
                    </div>
                ))}
            </div>
            {foundIndex !== null ? (
                <p id='element'>Element found at index {foundIndex}</p>
            ) : (
                currentIndex === -1 && <p>Element not found</p>
            )}
        </div>
    );
}

export default BinarySearchVisualizer;
