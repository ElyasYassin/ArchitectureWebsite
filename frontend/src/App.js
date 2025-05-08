import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout Components
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';


import Project from './components/Project.tsx';
import Models from './components/Models.tsx';
import Home from './components/Home.tsx';
import Gallery from './components/Gallery.tsx';
import Team from './components/Team.tsx';
import Materials from './components/Materials.tsx';
import Publications from './components/Publications.tsx';
import Contact from './components/Contact.tsx';
import Blog from './components/Blog.tsx';


const allowedOrigins = [ "https://127.0.0.1:8080/"];


function App() {
  return (
    <Router>
      <div>
        {/* Possibly a layout that has a nav bar and a footer */}
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/models" element={<Models />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;