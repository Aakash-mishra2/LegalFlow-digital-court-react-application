import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

const stats = [
  {
    value: '10+',
    label: 'courier partners',
  },
  {
    value: '27000+',
    label: 'pin codes covered',
  },
  {
    value: '50%',
    label: 'faster order processing',
  },
];

const StatsSection = () => {
  return (
    <section
      className="stats-section"
      style={{ background: '#fffff', padding: '48px 0' }}
    >
      <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 400,
            mb: 2,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Deliver to every part of India{' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            with ease
          </Box>
        </Typography>
        <Typography
          align="center"
          sx={{
            color: '#444',
            fontFamily: 'Inter, sans-serif',
            mb: 5,
            fontSize: '1.1rem',
          }}
        >
          Expand your market and satisfy customers with faster order processing
          and PAN India delivery
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {stats.map((stat, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#f8b217',
                    fontSize: '2rem',
                    mb: 1,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    color: '#222',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default StatsSection;
