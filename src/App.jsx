import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Navbar />
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default App;