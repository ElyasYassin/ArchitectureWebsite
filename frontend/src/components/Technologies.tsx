import React, { useCallback } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';

import doubleskin from './images/technologies/1503-thick-skinned-5.jpg';
import solar from './images/technologies/the-shade-store-solar.jpg';
import eco from './images/technologies/stonecycling-bespoke-wastebasedbricks-colours-4-1768x1457.jpg';
import energy from './images/technologies/premium_photo-1679607691186-4550451e13b7.avif';
import thermal from './images/technologies/proxyclick-visitor-management-system-l90zRbWvCoE-unsplash.jpg';
import smart from './images/technologies/amsterdam-city-archives-URnyBZCnlIs-unsplash.jpg';

export default function Technologies() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
    <section className="relative min-h-screen bg-black">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: '#000000' } },
          fpsLimit: 30,
          particles: {
            color: { value: '#ffffff' },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 100,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: 'bounce' },
            },
            number: {
              value: 40,
              density: { enable: true, area: 800 },
            },
            size: { value: { min: 1, max: 4 } },
            opacity: { value: 0.5 },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Foreground Content */}
      <section className="relative z-10 px-6 py-40 max-w-6xl mx-auto">

        <Grid container spacing={4} justifyContent="center">
          {features.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: 300,
                  borderRadius: 3,
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
                  height="140"
                  image={item.image}
                  alt={item.title}
                  sx={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
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