import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

import step1Img from '../../assets/front/images/features/Insync-amico.png';
import step2Img from '../../assets/front/images/features/startShipping.png';
import step3Img from '../../assets/front/images/features/Computerlogin-amico.png';

const steps = [
  {
    img: step1Img,
    title: 'STEP 01',
    desc: 'Register your court and complete digital verification',
  },
  {
    img: step2Img,
    title: 'STEP 02',
    desc: 'Import existing cases and configure judicial workflows',
  },
  {
    img: step3Img,
    title: 'STEP 03',
    desc: 'Begin digital case management and virtual hearings',
  },
];

const StepsSection = () => {
  return (
    <section className="steps-section" style={{ background: '#fff6e5', padding: '54px 0' }}>
      <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 300,
            mb: 6,
            color: '#222',
            fontFamily: 'serif',
            lineHeight: 1.3,
          }}
        >
          Modernize your{' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 700, fontStyle: 'italic' }}>
            courthouse
          </Box>
          {' '}in just{' '}
          <Box component="span" sx={{ fontWeight: 600 }}>
            3 steps
          </Box>
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
          {steps.map((step, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box
                sx={{
                  background: 'transparent',
                  borderRadius: '20px',
                  textAlign: 'center',
                  p: 2,
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={step.img}
                  alt={step.title}
                  sx={{
                    width: 280,
                    height: 300,
                    mb: 2,
                    objectFit: 'contain',
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: '#222',
                    mb: 1,
                    mt: 2,
                    borderBottom: '2px solid #F9A000',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: '#666',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                  }}
                >
                  {step.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            variant="contained"
            sx={{
              background: '#f8b217',
              color: '#fff',
              fontWeight: 600,
              borderRadius: '8px',
              px: 4,
              py: 1.5,
              boxShadow: 'none',
              textTransform: 'none',
              fontSize: '1rem',
              '&:hover': { background: '#FFA500' },
            }}
            onClick={() => window.location.href = '/contact-us'}
          >
            Try Now
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default StepsSection;
