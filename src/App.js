import React from 'react';
import './App.css';
import Home from './components/Home'; // Create this component
import About from './components/About'; // Create this component
import Contact from './components/Contact'; // Create this component
import Props from './components/props'; // Create this component
import Login from './components/Login'; // Create this component
import NotFound from './components/notfound'
import Handle from './components/handlehome'
import Class from './components/class&constructor'; // Create this component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path as necessary



      const App = () => {
    return (
        <Router>
            <Handle/>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Props" element={<Props />} />
                <Route path="/class&constructor" element={<Class />} />
                <Route path="/handlehome" element={<Handle />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};
    


export default App;
