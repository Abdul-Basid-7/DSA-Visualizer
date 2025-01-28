// BinaryTreeVisualizer.js
import React, { useState } from 'react';
import './BinaryTreeVisualizer.css';

function TreeNode({ value, left, right, isVisited }) {
    return (
        <div className={`tree-node ${isVisited ? 'visited' : ''}`}>
            {value}
            <div className="tree-children">
                {left && <TreeNode {...left} />}
                {right && <TreeNode {...right} />}
            </div>
        </div>
    );
}

function BinaryTreeVisualizer() {
    const [tree, setTree] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [visitedNodes, setVisitedNodes] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const insertNode = (value, node = tree) => {
        if (!node) {
            return { value, left: null, right: null };
        }
        if (value < node.value) {
            node.left = insertNode(value, node.left);
        } else {
            node.right = insertNode(value, node.right);
        }
        return node;
    };

    const handleInsert = () => {
        if (inputValue) {
            setTree(insertNode(Number(inputValue), tree));
            setInputValue('');
        }
    };

    const preorderTraversal = (node, visited = []) => {
        if (node) {
            visited.push(node.value);
            preorderTraversal(node.left, visited);
            preorderTraversal(node.right, visited);
        }
        return visited;
    };

    const handlePreorder = () => {
        setVisitedNodes(preorderTraversal(tree));
    };

    return (
        <div className="binary-tree-visualizer">
            <h3>Binary Tree Visualization</h3>
            <input
                type="text"
                placeholder="Enter value to insert"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleInsert}>Insert</button>
            <button onClick={handlePreorder}>Preorder Traversal</button>
            <div className="tree-container">
                {tree && <TreeNode {...tree} isVisited={visitedNodes.includes(tree.value)} />}
            </div>
        </div>
    );
}

export default BinaryTreeVisualizer;
