import React, { useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

import doubleskin from './images/technologies/1503-thick-skinned-5.webp';
import solar from './images/technologies/the-shade-store-solar.webp';
import eco from './images/technologies/stonecycling-bespoke-wastebasedbricks-colours-4-1768x1457.webp';
import energy from './images/technologies/premium_photo-1679607691186-4550451e13b7.webp';
import thermal from './images/technologies/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.webp';
import smart from './images/technologies/amsterdam-city-archives-URnyBZCnlIs-unsplash.webp';
import bg from './images/gleb-paniotov-gl4_SwF3EYA-unsplash.jpg'

export default function Technologies() {

  const features = [
    {
      title: 'Façade intelligente à double peau',
      description: 'Régulation thermique et acoustique optimale avec capteurs adaptatifs intégrés.',
      image: doubleskin,
    },
    {
      title: 'Films solaires & brise-soleil motorisés',
      description: 'Contrôle automatique de la lumière naturelle et de la chaleur solaire.',
      image: solar,
    },
    {
      title: 'Matériaux durables & allégés',
      description: 'Utilisation de ressources locales et recyclées pour une empreinte carbone réduite.',
      image: eco,
    },
    {
      title: 'Gestion énergétique automatisée',
      description: 'Systèmes de contrôle intelligents pour optimiser la consommation énergétique.',
      image: energy,
    },
    {
      title: 'Confort thermique & acoustique avancé',
      description: 'Isolation performante et ventilation naturelle assistée.',
      image: thermal,
    },
    {
      title: 'Technologies IA & domotique',
      description: 'Capteurs intelligents pour la gestion de la lumière, température et sécurité.',
      image: smart,
    },
  ];

  return (
     <section
          className="min-h-screen"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',  
            height: '100vh',               
            overflow: 'hidden',           
          }}
        >
    {/* Blurred glass effect wrapper */}
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(8px)', 
        WebkitBackdropFilter: 'blur(8px)',
        zIndex: 1,
      }}
    />
    
      {/* Foreground Content */}
      <section className="relative z-20 px-6 py-40 max-w-6xl mx-auto">

        <Grid container spacing={6} justifyContent="center">
          {features.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: 300,
                  borderRadius: 6,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 250, 
                    objectFit: 'cover', 
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                />
                <CardContent sx={{ py: 2 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>
    </section>
  );
}