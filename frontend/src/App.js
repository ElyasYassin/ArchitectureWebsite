import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Layout Components
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';


import Projet from './components/Projet.tsx';
import Espaces from './components/Espaces.tsx';
import Home from './components/Home.tsx';
import Galerie from './components/Galerie.tsx';
import Accessibilite from './components/Accessibilite.tsx';
import Technologies from './components/Technologies.tsx';
import Brochures from './components/Brochures.tsx';
import Contact from './components/Contact.tsx';
import Mention from './components/Mention.tsx';


const allowedOrigins = [ "https://127.0.0.1:8080/"];


function App() {
  return (
    <Router>
      <div>
        {/* Possibly a layout that has a nav bar and a footer */}
        <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/espaces" element={<Espaces />} />
          <Route path="/gallerie" element={<Galerie />} />
          <Route path="/accessibilite" element={<Accessibilite  />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/telechargements" element={<Brochures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mention />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;