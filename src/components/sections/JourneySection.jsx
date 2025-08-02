import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import lawImg from '../../assets/law.jpg';
import flatSystemImg from '../../assets/flat-system.jpg';
import '../Home.styles.css';
// Card data for easy switching
const cards = [
  {
    key: 'catalog',
    title: 'Centralized Case Repository',
    description: 'Digitize and organize all case files, petitions, evidence, and documents — accessible anytime, anywhere.',
    img: lawImg,
    alt: 'Legal System',
    highlight: true,
  },
  {
    key: 'shipping',
    title: 'Centralized Case Repository',
    description: 'Easily manage cases across different court branches and jurisdictions from one dashboard.',
    img: flatSystemImg,
    alt: 'System Management',
    highlight: true,
  },
  {
    key: 'processing',
    title: 'Quick 3-Step Case Lifecycle Management',
    description: (
      <Box component="div" sx={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
        <div>Step 1: Automated Case Registration – Instantly register and assign new cases.</div>
        <div>Step 2: Smart Hearing Scheduler – Schedule hearings with conflict checks and judge availability.</div>
        <div>Step 3: One-Click Document Uploads – Securely attach briefs, judgments, and legal notices.</div>
      </Box>
    ),
    img: lawImg,
    alt: 'Legal Process',
    highlight: true,
  },
];

const JourneySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="journey-section">
      <Container sx={{ maxWidth: '85% !important', width: '85% !important' }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 300,
            mb: 8,
            color: '#222',
            fontFamily: 'Playfair Display, serif',
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
          }}
        >
          How CaseFlow Streamlines the {' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 700, fontStyle: 'italic' }}>
            Judiciary Process
          </Box>
        </Typography>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Smaller Image */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '350px',
                transition: 'all 0.5s ease'
              }}
            >
              <img
                src={cards[activeIndex].img}
                alt={cards[activeIndex].alt}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: 'cover',
                  borderRadius: 20,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  transition: 'all 0.5s ease',
                }}
              />
            </Box>
          </Grid>

          {/* Cards taking more space */}
          <Grid item xs={12} md={8}>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              sx={{
                justifyContent: 'center',
              }}
            >
              {cards.map((card, idx) => (
                <Box
                  key={card.key}
                  className="feature-card"
                  sx={{
                    backgroundColor: idx === activeIndex
                      ? (card.highlight ? '#f8b217' : '#fff')
                      : '#f7f7f7',
                    color: idx === activeIndex && card.highlight ? '#fff' : '#222',
                    boxShadow: idx === activeIndex ? '0 8px 30px rgba(0,0,0,0.12)' : '0 4px 24px #00000014',
                    cursor: 'pointer',
                    borderRadius: '24px',
                    padding: '32px 36px',
                    transition: 'all 0.4s ease',
                    transform: idx === activeIndex ? 'translateX(-10px)' : 'translateX(0)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '15px',
                    borderLeft: idx === activeIndex ? '6px solid #f8b217' : 'none',
                    '&:before': {
                      // content: `"STEP ${idx + 1}"`,
                      position: 'absolute',
                      top: '-12px',
                      left: '48px',
                      right: '10px',
                      padding: '2px 4px',
                      backgroundColor: idx === activeIndex ? '#f8b217' : '#eee',
                      color: idx === activeIndex ? '#fff' : '#666',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      borderRadius: '12px',
                      zIndex: 1,
                    }
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: idx === activeIndex && card.highlight ? '#fff' : '#222',
                      fontSize: '1.25rem',
                      fontFamily: 'Roboto, sans-serif',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: idx === activeIndex && card.highlight ? '#fff' : '#555',
                      fontWeight: 400,
                      fontSize: '0.95rem',
                      fontFamily: 'Open Sans, sans-serif',
                      lineHeight: 1.6,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default JourneySection;
