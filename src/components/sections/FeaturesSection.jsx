import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box, Tabs, Tab } from '@mui/material';
import {
  MdStoreMallDirectory,
  MdInventory,
  MdLocalShipping,
  MdOutlineReceiptLong,
  MdOutlineReplay,
  MdOutlineScale,
  MdOutlineGavel,
} from 'react-icons/md';
import { AiOutlineThunderbolt, AiOutlineSync, AiOutlineDollarCircle } from 'react-icons/ai';
import { FaBoxes, FaHandHoldingUsd } from 'react-icons/fa';

// Import main images
import orderManagementImg from '../../assets/images/front/images/features/ecommerceImg.png';
import automationImg from '../../assets/images/front/images/features/automationLarge.png';
import shippingImg from '../../assets/images/front/images/features/Freeshipping-amico.png';
import reconciliationImg from '../../assets/images/front/images/features/reconcilation.png';

const featuresTabs = [
  {
    label: 'Order Management',
    image: orderManagementImg,
    title: 'Simplify orders across marketplaces',
    desc: 'Streamline your multichannel order management with a unified platform.',
    pointers: [
      {
        icon: <MdStoreMallDirectory size={32} color="#FFB940" />,
        title: 'Multi-channel integration',
        desc: 'Integrate multiple eCommerce marketplaces from a single dashboard',
      },
      {
        icon: <FaBoxes size={32} color="#FFB940" />,
        title: 'Bulk order handling',
        desc: 'Manage & process bulk orders efficiently to save time and improve operations',
      },
      {
        icon: <MdInventory size={32} color="#FFB940" />,
        title: 'Inventory management',
        desc: 'Manage stock levels in real-time to avoid both stock outs and overstocking',
      },
    ],
  },
  {
    label: 'Automation',
    image: automationImg,
    title: 'Automate your shipment process',
    desc: 'Speed up your eCommerce operations by automating daily tasks effortlessly',
    pointers: [
      {
        icon: <MdLocalShipping size={32} color="#FFB940" />,
        title: 'Smart courier recommendation',
        desc: 'Automatically selects the best courier partner based on cost, speed, and reliability',
      },
      {
        icon: <MdOutlineReceiptLong size={32} color="#FFB940" />,
        title: 'Auto-invoice generation',
        desc: 'Quickly generate accurate invoices, labels, and manifests in seconds',
      },
      {
        icon: <AiOutlineSync size={32} color="#FFB940" />,
        title: 'Real-time order updates',
        desc: 'Keep you and your customers informed with automatic real-time order updates',
      },
    ],
  },
  {
    label: 'Shipping',
    image: shippingImg,
    title: 'Fast & hassle-free shipping',
    desc: 'Experience reliable shipping with our easy-to-use solutions',
    pointers: [
      {
        icon: <AiOutlineDollarCircle size={32} color="#FFB940" />,
        title: 'On-time COD remittance',
        desc: 'Get your COD remittance on-time for better cash management',
      },
      {
        icon: <MdOutlineReplay size={32} color="#FFB940" />,
        title: 'Hassle-free returns',
        desc: 'Delight your customers with easy & streamlined return management',
      },
      {
        icon: <AiOutlineThunderbolt size={32} color="#FFB940" />,
        title: 'NDR assistance',
        desc: 'Increase your delivery success rate & boost revenue with delivery optimization',
      },
    ],
  },
  {
    label: 'Reconciliation',
    image: reconciliationImg,
    title: 'Easy and accurate reconciliation',
    desc: 'Keep your finances error-free and operations smooth with easy reconciliation',
    pointers: [
      {
        icon: <MdOutlineScale size={32} color="#FFB940" />,
        title: 'Weight Reconciliation',
        desc: 'Ensure accurate weight reconciliation for every shipment',
      },
      {
        icon: <FaHandHoldingUsd size={32} color="#FFB940" />,
        title: 'COD reconciliation',
        desc: 'Get on-time and accurate COD remittance in your account',
      },
      {
        icon: <MdOutlineGavel size={32} color="#FFB940" />,
        title: 'Dispute management',
        desc: 'Efficiently manage disputes with minimal discrepancies',
      },
    ],
  },
];

const FeaturesSection = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="features-section">
      <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
        <Typography
          fontSize={"40px"}
          align="center"
          sx={{
            fontWeight: 300,
            mt: 1,
            mb: 3,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Grow your eCommerce business with{'  '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            maximum ease
          </Box>
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          align="center"
          sx={{
            mb: 12,
            '& .MuiTabs-list': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '2px solid #00000029',
              width: '80%',
            },
            '& .MuiTab-root': {
              fontWeight: 600,
              fontSize: '1.1rem',
              color: '#222',
              textTransform: 'none',
              minWidth: 160,
            },
            '& .Mui-selected': {
              color: '#FFB940 !important',
              borderBottom: '2px solid #FFB940',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#FFB940',
              height: 2,
            },
          }}
        >
          {featuresTabs.map((t, i) => (
            <Tab key={t.label} label={t.label} />
          ))}
        </Tabs>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
              <Box
                component="img"
                src={featuresTabs[tab].image}
                alt={featuresTabs[tab].label}
                sx={{
                  width: '100%',
                  maxWidth: 370,
                  borderRadius: '32px',
                  background: 'transparent',
                  objectFit: 'cover',
                  boxSizing: 'border-box',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 1,
                color: '#222',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {featuresTabs[tab].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                color: '#222',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {featuresTabs[tab].desc}
            </Typography>
            <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: '0' }}>
              {featuresTabs[tab].pointers.map((p, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  alignItems="left"
                  justifyContent="flex-start"
                  mb={2}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      mr: 2,
                      mt: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {React.cloneElement(p.icon, { color: '#222' })}
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 700, color: '#222', textAlign: 'left' }}
                    >
                      {p.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#222', textAlign: 'left' }}>
                      {p.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
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
              onClick={() => window.location.href = '/contact-us'}
            >
              Try Now
            </Button>
          </Grid>
        </Grid>
      </Container>
    </section >
  );
};

export default FeaturesSection;
