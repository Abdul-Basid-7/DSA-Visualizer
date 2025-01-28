import React from 'react'
import { Link } from 'react-router-dom';
import './DSA.css'

const DSA = () => {
  return (
    <div className='background'>
        <h1>Data Structures and Algorithms</h1>
        <ul>
        <li><Link to = "/sorting" className="no-underline">Sorting Algorithms</Link></li>
        <li><Link to = "/searching" className="no-underline">Searching Algorithms</Link></li>
        <li><Link to = "/stack" className="no-underline">Stack Data Structures</Link></li>
        <li ><Link to = "/queue" className="no-underline">Queue Data Structures</Link></li>
        <li><Link to = "/linkedList" className="no-underline">LinkedList Data Structures</Link></li>
        <li><Link to = "/tree" className="no-underline">Tree Data Structures</Link></li>
        <li><Link to = "/graph" className="no-underline">Graph Data Structures</Link></li>
        </ul>
    </div>
  )
}

export default DSA
