import React, { useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import mapImg from '../../assets/images/front/images/map.png';
import workflowImg from '../../assets/images/front/images/workflow.png';
import orderProcessingImg from '../../assets/images/front/images/orderProcessingStep.png';
import '../Home.styles.css';
// Card data for easy switching
const cards = [
  {
    key: 'catalog',
    title: 'Centralized product catalog management',
    description: 'Easily update and track your inventory across all eCommerce platforms from one convenient dashboard.',
    img: mapImg,
    alt: 'Product Catalog',
    highlight: true,
  },
  {
    key: 'shipping',
    title: 'Streamlined multi-parcel shipping',
    description: 'Easily manage multiple pickup locations and couriers for one customer under a single order ID, ensuring quick and efficient order delivery.',
    img: workflowImg,
    alt: 'Multi-portal Shipping',
    highlight: true,
  },
  {
    key: 'processing',
    title: 'Quick 3-step order processing',
    description: (
      <Box component="div" sx={{ textAlign: 'left', fontSize: '16px', color: 'black' }}>
        <div>Step 1: Automatic order confirmation: Quickly accept and confirm orders.</div>
        <div>Step 2: Courier comparison: Choose the best courier for fast & efficient shipping.</div>
        <div>Step 3: One-click dispatch: Process and ship orders with a single click.</div>
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
          How Shipmaxx simplifies your{' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            eCommerce journey
          </Box>
        </Typography>
        <Grid container spacing={6} alignItems="stretch">
          {/* Image and Cards side by side in parallel columns */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
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
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              gap={4}
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
                    transform: idx === activeIndex ? 'translateX(-20px)' : 'translateX(0)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginBottom: '15px',
                    borderLeft: idx === activeIndex ? '6px solid #f8b217' : 'none',
                    '&:before': {
                      content: `"STEP ${idx + 1}"`,
                      position: 'absolute',
                      top: '-12px',
                      left: '36px',
                      padding: '2px 10px',
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
                      fontSize: '0.8rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {card.description}
                  </Typography>
                  {idx !== cards.length - 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: '-25px',
                        left: '45px',
                        height: '35px',
                        width: '2px',
                        backgroundColor: idx === activeIndex ? '#f8b217' : '#ddd',
                        zIndex: 0,
                      }}
                    />
                  )}
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
