import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import shiprocketDb from '../../assets/images/front/images/shiprocket-dashboard.png';
const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
        <Grid container spacing={4} alignItems="center" >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className="main-title">
              Maximize eCommerce orders
              <span className="highlight" style={{ fontWeight: '20', fontSize: '60px' }}>with 3-step shipping</span>
            </Typography>
            <Typography variant="body1" fontWeight={200} className="description">
              Streamline your eCommerce journey with our all-in-one order management and shipping Solution
            </Typography>
            {/**connect buttons */}
            <div className="cta-buttons">
              <Link to="/contact-us" className="btn-primary">Let's Connect</Link>
              <Link to="/signup" className="btn-secondary">SignUp</Link>
            </div>
          </Grid>
          <Grid item xs={12} md={6} >
            <img src={shiprocketDb} alt="ShipMaxx Dashboard" className="hero-image" />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HeroSection;
