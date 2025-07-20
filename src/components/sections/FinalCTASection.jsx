import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

const FinalCTASection = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#FFF5DC',
        py: 6,
        textAlign: 'center',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 500,
            fontSize: { xs: '1.5rem', md: '2rem' },
            mb: 2,
            color: '#1E1E1E',
          }}
        >
          Let's make eCommerce{' '}
          <Box
            component="span"
            sx={{ fontWeight: 700, color: '#F4B400' }}
          >
            easy and smooth
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: '1rem',
            color: '#333333',
            maxWidth: 600,
            mx: 'auto',
            mb: 4,
          }}
        >
          Sign up to streamline your order and shipping processes for a smoother business growth
        </Typography>

        <Button
          variant="contained"
          component={Link}
          to="/try-now"
          sx={{
            backgroundColor: '#F4B400',
            color: '#fff',
            px: 4,
            py: 1,
            borderRadius: '6px',
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#e2a900',
            },
          }}
        >
          Try Now
        </Button>
      </Container>
    </Box>
  );
};

export default FinalCTASection;
