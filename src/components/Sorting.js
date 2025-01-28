import React from 'react'
import BubbleSortVisualizer from './BubbleSortVisualizer'
import InsertionSortVisualizer from './InsertionSortVisualizer'
import QuickSortVisualizer from './QuickSortVisualizer'
import MergeSortVisualizer from './MergeSortVisualizer'
import SelectionSortVisualizer from './SelectionSortVisualizer'

const Sorting = () => {
    return (
        <div>
            <BubbleSortVisualizer />
            <InsertionSortVisualizer />
            <QuickSortVisualizer />
            <MergeSortVisualizer />
            <SelectionSortVisualizer />
        </div>
    )
}

export default Sorting
