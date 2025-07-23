import { Box, Container, Dialog, Paper, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/shipmaxx-logo.png";
import { useState } from 'react';
import { FaMapMarkedAlt, FaCubes, FaShippingFast, FaListAlt, FaWarehouse, FaProjectDiagram, FaLayerGroup, FaRetweet, FaBalanceScale } from 'react-icons/fa';

// Modular TabDialog component
function TabDialog({ open, onOpen, onClose, items, dialogSx }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: '24px',
          mt: '60px',
          boxShadow: '0 8px 32px 0 #00000029',
          p: 3,
          ...dialogSx,
        }
      }}
      hideBackdrop
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-start',
        }
      }}
    >
      <Paper
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        sx={{
          borderRadius: '24px',
          boxShadow: 'none',
          p: 3,
          background: '#fff',
        }}
      >
        <Grid container spacing={2}>
          {items.map((item, idx) => (
            <Grid item xs={12} sm={4} key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
              {item.icon}
              <Typography sx={{ color: '#222', fontWeight: 500, fontSize: 16 }}>
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Dialog>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(false);
  const navigate = useNavigate();

  const solutions = [
    { icon: <FaMapMarkedAlt color="#f8b217" size={28} />, label: "Pan India Delivery" },
    { icon: <FaListAlt color="#f8b217" size={28} />, label: "Centralized Cataloging" },
    { icon: <FaCubes color="#f8b217" size={28} />, label: "Multi-Parcel Shipment" },
    { icon: <FaRetweet color="#f8b217" size={28} />, label: "Order Processing" },
    { icon: <FaWarehouse color="#f8b217" size={28} />, label: "Integrated WMS" },
    { icon: <FaProjectDiagram color="#f8b217" size={28} />, label: "Multi-Channel Integration" },
    { icon: <FaShippingFast color="#f8b217" size={28} />, label: "Shipping Management" },
    { icon: <FaLayerGroup color="#f8b217" size={28} />, label: "Workflow-Automation" },
    { icon: <FaBalanceScale color="#f8b217" size={28} />, label: "Reconciliation" },
  ];

  const companyLogos = [
    { icon: <FaMapMarkedAlt color="#f8b217" size={28} />, label: "Pan India Delivery" },
    { icon: <FaListAlt color="#f8b217" size={28} />, label: "Centralized Cataloging" },
  ];
  const faqLogos = [
    { icon: <FaMapMarkedAlt color="#f8b217" size={28} />, label: "Pan India Delivery" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        height: '60px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <Container
        sx={{
          px: { xs: '20px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '90% !important',
          maxWidth: '90% !important',
        }}
      >
        <Link to="/">
          <img
            src={logo}
            alt="ShipMaxx Logo"
            style={{
              height: '40px',
              width: 'auto',
            }}
          />
        </Link>

        <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', gap: '24px' }}>
            <button
              style={{
                textDecoration: 'none',
                color: '#f8b217',
                fontWeight: 500,
                cursor: 'pointer',
                position: 'relative',
                background: 'none',
                border: 'none',
                padding: '0 8px',
              }}
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setTimeout(() => setOpen(false), 200)}
            >
              Solutions
              <TabDialog
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                items={solutions}
                dialogSx={{ ml: '100px' }}
              />
            </button>
            <button
              style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                cursor: 'pointer',
                position: 'relative',
                background: 'none',
                border: 'none',
                padding: '0 8px',
              }}
              onMouseEnter={() => setOpenCompany(true)}
              onMouseLeave={() => setTimeout(() => setOpenCompany(false), 200)}
            >
              Company
              <TabDialog
                open={openCompany}
                onOpen={() => setOpenCompany(true)}
                onClose={() => setOpenCompany(false)}
                items={companyLogos}
                dialogSx={{ ml: '240px' }}
              />
            </button>
            <button
              style={{
                textDecoration: 'none',
                color: '#333333',
                fontWeight: 500,
                cursor: 'pointer',
                position: 'relative',
                background: 'none',
                border: 'none',
                padding: '0 8px',
              }}
              onMouseEnter={() => setOpenFAQ(true)}
              onMouseLeave={() => setTimeout(() => setOpenFAQ(false), 200)}
            >
              Resources
              <TabDialog
                open={openFAQ}
                onOpen={() => setOpenFAQ(true)}
                onClose={() => setOpenFAQ(false)}
                items={faqLogos}
                dialogSx={{ ml: '360px' }}
              />
            </button>
          </Box>
          <Link to="/contact-us" style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 600,
            padding: '8px 24px',
            borderRadius: '6px',
            backgroundColor: '#000000'
          }}>
            Try Now
          </Link>
          <Link 
            onClick={() => navigate('/auth/login')} 
            style={{
              textDecoration: 'none',
              color: '#000000',
              fontWeight: 600,
              padding: '8px 24px',
              borderRadius: '6px',
              backgroundColor: '#FFC85E',
              cursor: 'pointer'
            }}
          >
            Log In
          </Link>
        </Box>
      </Container>
    </Box>
  );
}