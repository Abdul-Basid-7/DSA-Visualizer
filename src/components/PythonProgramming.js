// PythonProgramming.js
import React from 'react';
import './ProgrammingTutorial.css';

const PythonProgramming = () => {
    const topics = [
        { title: "Introduction to Python", description: "Get started with Python programming." },
        { title: "Variables and Data Types", description: "Understanding variables and types in Python." },
        { title: "Control Flow", description: "Conditionals and loops in Python." },
        { title: "Functions", description: "Creating and using functions in Python." },
        { title: "Modules and Libraries", description: "Using libraries for extended functionality." }
    ];

    return (
        <div className="programming-tutorial">
            <h2>Python Programming</h2>
            <p>Python is a highly readable language, popular in data science, web development, and automation.</p>
            <div className="topics-list">
                {topics.map((topic, index) => (
                    <div key={index} className="topic">
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </div>
                ))}
            </div>
            <a
                href="https://www.onlinegdb.com/online_python_compiler"
                target="_blank"
                rel="noopener noreferrer"
                className="compiler-link"
            >
                Run Python Code Online
            </a>
        </div>
    );
};

export default PythonProgramming;
