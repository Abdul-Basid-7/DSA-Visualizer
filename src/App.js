
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
// import Footer from './components/Footer';
import DSA from './components/DSA';
import './App.css'
import Sorting from './components/Sorting';
import Searching from './components/Searching';
import StackVisualizer from './components/StackVisualizer';
import QueueVisualizer from './components/QueueVisualizer';
import LinkedListVisualizer from './components/LinkedListVisualizer';
import BinaryTreeVisualizer from './components/BinaryTreeVisualizer';
import GraphVisualizer from './components/GraphVisualizer';
import PrommingLanguage from './components/PrommingLanguage';
import CProgramming from './components/CProgramming';
import JavaProgramming from './components/JavaProgramming';
import PythonProgramming from './components/PythonProgramming';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
    return (
        // <div className="App">
        //     <Header />
        //     <Home />
        //     <Footer />
        // </div>}
        <Router>
            <Header />
            <Home />
            {/* <Footer /> */}
            {/* <Switch> */}
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/DSA" Component={DSA} />
                {/* <Redirect to = "/"  /> */}
            </Routes>
            <Routes >
                <Route path="/sorting" Component={Sorting} />
                <Route path="/searching" Component={Searching} />
            </Routes>
            <Routes>
                <Route path="/stack" Component={StackVisualizer} />
            </Routes>
            <Routes>
                <Route path="/queue" Component={QueueVisualizer} />
            </Routes>
            <Routes>
                <Route path="linkedList" Component={LinkedListVisualizer} />
            </Routes>
            <Routes>
                <Route path="/tree" Component={BinaryTreeVisualizer} />
            </Routes>
            <Routes>
                <Route path="/graph" Component={GraphVisualizer} />
            </Routes>
            <Routes>
                <Route path="/programming" Component={PrommingLanguage} />
            </Routes>
            <Routes>
                <Route path="/c" Component={CProgramming} />
            </Routes>
            <Routes>
                <Route path="/java" Component={JavaProgramming} />
            </Routes>
            <Routes>
                <Route path="/python" Component={PythonProgramming} />
            </Routes>

        </Router>

    );
}

export default App;


