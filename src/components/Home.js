import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <section id="visualizations">
                 <Link to="/DSA" className="no-underline"><h1>Data Structures and Algorithms Visualizer</h1></Link>
                <p>Explore various algorithms and data structures through interactive visualizations.</p>
                 
                 {/* <Sorting />  */}
                
            </section>
            <section id="programming">
                <Link to="/programming" className="no-underline"><h2>Programming Tutorials</h2></Link>
                <p>Learn programming languages like C, Java, and Python with our resources.</p>
            </section>
            <section id="compiler">
                <a href='https://onecompiler.com/' className="no-underline"><h2>Online Compiler</h2></a>
                <p>Try out your code in an online compiler with just a click.</p>
            </section>
        </div>
    );
}

export default Home;
