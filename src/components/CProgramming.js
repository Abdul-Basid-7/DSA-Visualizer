// CProgramming.js
import React from 'react';
import './ProgrammingTutorial.css';

const CProgramming = () => {
    const topics = [
        { title: <a href='https://drive.google.com/drive/folders/1MLsRkN0k0Bd-McChaAe5pmfeTNXSVfdn'>Introduction of C</a>, description: "Learn the basics of C programming." },
        { title: "Data Types", description: "Overview of data types in C." },
        { title: "Control Structures", description: "Learn about if, else, loops, and switch statements." },
        { title: "Functions", description: "Introduction to defining and calling functions." },
        { title: "Pointers", description: "Understanding pointers and memory allocation." }
    ];

    return (
        <div className="programming-tutorial">
            <h2>C Programming</h2>
            <p>C is a powerful, general-purpose language, foundational for systems programming and many other areas.</p>
            <div className="topics-list">
                {topics.map((topic, index) => (
                    <div key={index} className="topic">
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </div>
                ))}
            </div>
            <a
                href="https://www.onlinegdb.com/online_c_compiler"
                target="_blank"
                rel="noopener noreferrer"
                className="compiler-link"
            >
                Run C Code Online
            </a>
        </div>
    );
};

export default CProgramming;
