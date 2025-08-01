
import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section style={{ paddingTop: '80px', paddingBottom: '80px', background: 'transparent' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontWeight: 800, 
                  color: '#222', 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Digital Court Case Management System
              </Typography>
              <Typography 
                sx={{ 
                  fontSize: '1.2rem', 
                  color: '#666', 
                  mb: 4, 
                  lineHeight: 1.6 
                }}
              >
                Streamline your legal proceedings with our comprehensive digital platform. 
                Manage cases, track hearings, and connect with legal professionals all in one place.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  component={Link}
                  to="/auth"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#f8b217',
                    color: '#fff',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      bgcolor: '#e09900'
                    }
                  }}
                >
                  Get Started
                </Button>
                <Button
                  component={Link}
                  to="/contact-us"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: '#f8b217',
                    color: '#f8b217',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    '&:hover': {
                      borderColor: '#e09900',
                      color: '#e09900'
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '400px',
                background: 'rgba(248, 178, 23, 0.1)',
                borderRadius: '20px',
                border: '2px dashed #f8b217'
              }}
            >
              <Typography variant="h6" color="#666">
                Hero Image Placeholder
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
