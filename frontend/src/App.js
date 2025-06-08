import React from 'react';
import {useLocation, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Loader from './components/Loader.tsx';
import { usePageLoader } from './hooks/usePageLoader.ts';

// Layout Components
import Nav from './components/Nav.tsx';
import Footer from './components/Footer.tsx';

import HotelMap from './components/HotelMap.tsx';
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

  function AppRoutesWithLoader() {
    const loading = usePageLoader();
    const location = useLocation();

    return (
      <>
        {loading && <Loader />}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projet" element={<Projet />} />
          <Route path="/espaces" element={<Espaces />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/accessibilite" element={<Accessibilite />} />
          <Route path="/map" element={<HotelMap />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/telechargements" element={<Brochures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mention />} />
        </Routes>
        {location.pathname !== '/' && location.pathname !== '/home' && <Footer />}
      </>
    );
  }


  return (
    <Router>
      <AppRoutesWithLoader />
    </Router>
  );
}

export default App;