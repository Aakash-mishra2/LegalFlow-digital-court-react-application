import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import mapImg from '../../assets/images/front/images/map.png';
// import workflowImg from '../../assets/images/front/images/workflow.png';
import orderProcessingImg from '../../assets/images/front/images/orderProcessingStep.png';
import '../Home.styles.css';
// Card data for easy switching
const cards = [
  {
    key: 'catalog',
    title: 'Centralized Case Repository',
    description: 'Digitize and organize all case files, petitions, evidence, and documents — accessible anytime, anywhere.',
    img: mapImg,
    alt: 'Product Catalog',
    highlight: true,
  },
  {
    key: 'shipping',
    title: 'Centralized Case Repository',
    description: 'Easily manage cases across different court branches and jurisdictions from one dashboard.',
    img: mapImg,
    alt: 'Multi-portal Shipping',
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
    img: orderProcessingImg,
    alt: 'Order Processing',
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
            fontWeight: 400,
            mb: 8,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          How CaseFlow Streamlines the {' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            Judiciary Process
          </Box>
        </Typography>
        <Grid container spacing={6} alignItems="stretch" justifyContent="space-between" gap={8} >
          {/* Image and Cards side by side in parallel columns */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection:'row !important', alignItems: 'center' }}>
            <Box
              sx={{
                position: 'sticky',
                top: '100px',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '500px',
                transition: 'all 0.5s ease'
              }}
            >
              <img
                src={cards[activeIndex].img}
                alt={cards[activeIndex].alt}
                style={{
                  width: "90%",
                  maxHeight: "100%",
                  objectFit: 'contain',
                  borderRadius: 24,
                  background: '#fff',
                  transition: 'all 0.5s ease',
                }}
              />
            </Box>
          </Grid>

          {/* Cards */}
          <Grid item xs={12} md={6} maxWidth={'70% !important'}>
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
                      fontWeight: 700,
                      mb: 1,
                      color: idx === activeIndex && card.highlight ? '#fff' : '#222',
                      fontSize: '1.3rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: idx === activeIndex && card.highlight ? '#fff' : '#666',
                      fontWeight: 400,
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
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
