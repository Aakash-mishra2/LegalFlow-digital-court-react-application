import { Container, Grid, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import inventoryImg from '../../assets/images/front/images/miniWarehouse.png';

const InventorySection = () => {
  return (
    <section
      className="inventory-section"
      style={{
        background: '#FFF6E5',
        // padding: '48px 0',
      }}
    >
      <Container maxWidth="xl" alignItems="center" spacing={0}>
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">
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
              Simplify Workloads with LegalFlow – Your Court WMS
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
              Judiciary-Ready Workflow Management System
            </Typography>
            <Box display="flex" flexDirection="column" gap="4" marginBottom={6}>
              <Typography variant="body4" sx={{ color: '#666', fontWeight: 600 }}>
                - Monitor case status across departments and benches
              </Typography>
              <Typography variant="body4" sx={{ color: '#666', fontWeight: 600 }}>
                - Automatically generate cause lists, hearing rosters, and notices
              </Typography>
              <Typography variant="body4" sx={{ color: '#666', fontWeight: 600 }}>
                - Track progress, actions, and case movement from a unified interface
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
                src={inventoryImg}
                alt="Inventory Management"
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
        </Grid>
      </Container>

    </section>
  );
};

export default InventorySection;
