// LinearSearchVisualizer.js
import React, { useState } from 'react';
import './LinearSearchVisualizer.css';

function LinearSearchVisualizer() {
    const [array, setArray] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [foundIndex, setFoundIndex] = useState(null);

    const handleArrayChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const generateArray = () => {
        const newArray = inputValue.split(',').map(Number);
        setArray(newArray);
        setCurrentIndex(-1);
        setFoundIndex(null);
    };

    const linearSearch = async () => {
        setFoundIndex(null);
        for (let i = 0; i < array.length; i++) {
            setCurrentIndex(i);
            await new Promise((resolve) => setTimeout(resolve, 500)); // Animation delay

            if (array[i] === parseInt(searchValue)) {
                setFoundIndex(i);
                return;
            }
        }
        setCurrentIndex(-1);
    };

    return (
        <div className="linear-search-visualizer">
            <h3>Linear Search Visualization</h3>
            <input
                type="text"
                placeholder="Enter numbers separated by commas"
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
            <button onClick={linearSearch}>Start Linear Search</button>
            <div className="array-container">
                {array.map((value, index) => (
                    <div
                        key={index}
                        className={`array-bar ${index === currentIndex ? 'current' : ''} ${foundIndex === index ? 'found' : ''}`}
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

export default LinearSearchVisualizer;
