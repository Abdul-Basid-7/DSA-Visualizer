// GraphVisualizer.js
import React, { useState } from 'react';
import './GraphVisualizer.css';

function GraphVisualizer() {
    const [graph, setGraph] = useState({});
    const [inputNode, setInputNode] = useState('');
    const [inputEdge, setInputEdge] = useState('');
    const [visitedNodes, setVisitedNodes] = useState([]);

    const handleNodeChange = (e) => {
        setInputNode(e.target.value);
    };

    const handleEdgeChange = (e) => {
        setInputEdge(e.target.value);
    };

    const addNode = () => {
        if (inputNode) {
            setGraph(prevGraph => ({ ...prevGraph, [inputNode]: [] }));
            setInputNode('');
        }
    };

    const addEdge = () => {
        const [node1, node2] = inputEdge.split('-');
        if (node1 && node2 && graph[node1] && graph[node2]) {
            setGraph(prevGraph => ({
                ...prevGraph,
                [node1]: [...prevGraph[node1], node2],
                [node2]: [...prevGraph[node2], node1]
            }));
            setInputEdge('');
        }
    };

    const dfs = (node, visited = new Set()) => {
        if (!visited.has(node)) {
            visited.add(node);
            setVisitedNodes([...visited]);
            graph[node].forEach(neighbor => dfs(neighbor, visited));
        }
    };

    const handleDFS = () => {
        setVisitedNodes([]);
        dfs(Object.keys(graph)[0]);
    };

    return (
        <div className="graph-visualizer">
            <h3>Graph Visualization</h3>
            <input
                type="text"
                placeholder="Enter node"
                value={inputNode}
                onChange={handleNodeChange}
            />
            <button onClick={addNode}>Add Node</button>
            <input
                type="text"
                placeholder="Enter edge (e.g., A-B)"
                value={inputEdge}
                onChange={handleEdgeChange}
            />
            <button onClick={addEdge}>Add Edge</button>
            <button onClick={handleDFS}>DFS Traversal</button>
            <div className="graph-container">
                {Object.keys(graph).map((node, index) => (
                    <div key={index} className={`graph-node ${visitedNodes.includes(node) ? 'visited' : ''}`}>
                        {node}
                        <div className="graph-edges">
                            {graph[node].map((neighbor, i) => (
                                <span key={i} className="edge">{neighbor}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GraphVisualizer;
