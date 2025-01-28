// JavaProgramming.js
import React from 'react';
import './ProgrammingTutorial.css';

const JavaProgramming = () => {
    const topics = [
        { title: <a href="https://www.geeksforgeeks.org/introduction-to-java/">Introduction of Java</a>, description: "Learn the basics of Java programming." },
        { title: <a href='https://www.theknowledgeacademy.com/blog/class-and-object-in-java/#:~:text=Class%20in%20Java%20is%20a,with%20its%20behaviour%20and%20state.'>Classes and Objects</a>, description: "Understanding Object-Oriented Programming." },
        { title: "Inheritance", description: "Introduction to inheritance and polymorphism." },
        { title: "Exception Handling", description: "Handling errors with try-catch blocks." },
        { title: "Collections", description: "Working with Lists, Sets, and Maps." }
    ];

    return (
        <div className="programming-tutorial">
            <h2>Java Programming</h2>
            <p>Java is a versatile, platform-independent language known for its rich library support and robustness.</p>
            <div className="topics-list">
                {topics.map((topic, index) => (
                    <div key={index} className="topic">
                        <h3>{topic.title}</h3>
                        <p>{topic.description}</p>
                    </div>
                ))}
            </div>
            <a
                href="https://www.onlinegdb.com/online_java_compiler"
                target="_blank"
                rel="noopener noreferrer"
                className="compiler-link"
            >
                Run Java Code Online
            </a>
        </div>
    );
};

export default JavaProgramming;
