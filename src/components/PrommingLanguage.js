import React from 'react'
import { Link } from 'react-router-dom'
import './PrommingLanguage.css'

const PrommingLanguage = () => {
  return (
    <div className='language'>
      <ul>
        <h1>Programming Tutorials</h1>
        <li><Link to= "/c" className="no-underline">C Language</Link></li>
        <li><Link to= "/java" className="no-underline">Java Language</Link></li>
        <li><Link to = "/python" className="no-underline">Python Language</Link></li>
      </ul>
    </div>
  )
}

export default PrommingLanguage
