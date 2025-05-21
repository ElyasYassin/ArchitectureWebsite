import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardActionArea,
  CardMedia,
} from '@mui/material';

import ficheIcon from './images/logo.png';
import brochureIcon from './images/logo.png';
import visuelIcon from './images/logo.png';
import videoIcon from './images/logo.png';

export default function Telechargements() {
  const files = [
    {
      title: 'Fiche Technique',
      description: 'Détails techniques sur les matériaux, performances et surfaces.',
      link: '/docs/fiche-technique.pdf',
      image: ficheIcon,
    },
    {
      title: 'Brochure Marketing',
      description: 'Présentation complète du projet pour investisseurs et entreprises.',
      link: '/docs/brochure-marketing.pdf',
      image: brochureIcon,
    },
    {
      title: 'Book de Rendus & Visuels',
      description: 'Sélection de visuels HD et maquettes 3D du projet.',
      link: '/docs/book-visuels.pdf',
      image: visuelIcon,
    },
    {
      title: 'Pitch PFE / Vidéo de Présentation',
      description: 'Vidéo courte expliquant la vision et les objectifs du projet.',
      link: '/videos/pitch.mp4',
      image: videoIcon,
    },
  ];

  return (
    <Box sx={{ px: 4, py: 20, maxWidth: '1400px', mx: 'auto' }}>
      <Grid container spacing={4} justifyContent="center" mt={4}>
        {files.map((file, idx) => (
          <Grid item key={idx}>
            <Card
              elevation={3}
              sx={{
                maxWidth: 260,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: '0.3s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea component="a" href={file.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  height="140"
                  image={file.image}
                  alt={file.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {file.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {file.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}