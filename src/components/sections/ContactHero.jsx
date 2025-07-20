import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const ContactHero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Grid container spacing={4} justifyContent="center" alignContent='center'>
                    <Typography
                        fontSize={{ xs: 44, md: 64 }}
                        className="main-title"
                        marginTop={4}
                        sx={{ fontWeight: 900, letterSpacing: '-1px', lineHeight: 1.1 }}
                    >
                        Get Started With ShipMaxx
                    </Typography>
                </Grid>
            </Container>
        </section>
    );
};

export default ContactHero;
