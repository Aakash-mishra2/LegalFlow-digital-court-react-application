import { Container, Grid, Typography, Button, Box, Link } from '@mui/material';
import realTimeImg from '../../assets/images/front/images/realTime.png';

const UpdatesSection = () => {
  return (
    <section
      className="updates-section"
      style={{
        background: '#FFFFFF',
        // padding: '48px 0',
      }}
    >
      <Container maxWidth="xl" alignItems="center" spacing={0}>
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">

        {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box
                component="img"
                src={realTimeImg}
                alt="Real Time Updates"
                sx={{
                  width: 640,
                  maxWidth: 640,
                  borderRadius: '60px',
                  background: '#fff',
                  objectFit: 'cover',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Grid>

          {/* Text Content */}
          <Grid item xs={12} md={6} textAlign="left" maxWidth="45% !important" width="45% !important">
            <Typography
              variant="h4"
              sx={{
                fontWeight: 400,
                mb: 1,
                color: '#111',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Secure, Compliant, and Scalable
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: '#FFB940',
                mb: 2,
                fontFamily: 'Inter, sans-serif',
                display: 'block',
              }}
            >
             
            </Typography>
            <Box display="flex" flexDirection="column" gap="4" marginBottom={6}>
              <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>
                - End-to-end data encryption
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>
                - Role-based access control
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>
                - Designed for high-volume courts and legal institutions
              </Typography>
            </Box>
            <Link to="/contact-us">
              <Button
                variant="contained"
                sx={{
                  background: '#FFB940',
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
              >
                Try Now
              </Button>
            </Link>
          </Grid>

          
        </Grid>
      </Container>

    </section>
  );
};

export default UpdatesSection;
