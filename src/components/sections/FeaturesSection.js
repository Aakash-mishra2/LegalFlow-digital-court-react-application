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
import orderManagementImg from '../../assets/front/images/features/ecommerceImg.png';
import automationImg from '../../assets/front/images/features/automationLarge.png';
import shippingImg from '../../assets/front/images/features/Freeshipping-amico.png';
import reconciliationImg from '../../assets/front/images/features/reconcilation.png';

const featuresTabs = [
  {
    label: 'Case Management',
    image: orderManagementImg,
    title: 'Comprehensive case tracking across all jurisdictions',
    desc: 'Streamline your legal case management with a unified digital platform.',
    pointers: [
      {
        icon: <MdStoreMallDirectory size={32} color="#FFB940" />,
        title: 'Multi-court integration',
        desc: 'Connect with multiple court systems and jurisdictions from a single dashboard',
      },
      {
        icon: <FaBoxes size={32} color="#FFB940" />,
        title: 'Bulk case processing',
        desc: 'Handle multiple cases efficiently with automated workflows and batch operations',
      },
      {
        icon: <MdInventory size={32} color="#FFB940" />,
        title: 'Document management',
        desc: 'Organize and track all case documents, evidence, and legal filings in real-time',
      },
    ],
  },
  {
    label: 'Automation',
    image: automationImg,
    title: 'Automate your legal workflow processes',
    desc: 'Speed up court operations by automating routine legal tasks effortlessly',
    pointers: [
      {
        icon: <MdLocalShipping size={32} color="#FFB940" />,
        title: 'Smart case assignment',
        desc: 'Automatically assign cases to appropriate judges and courts based on jurisdiction and availability',
      },
      {
        icon: <MdOutlineReceiptLong size={32} color="#FFB940" />,
        title: 'Auto-document generation',
        desc: 'Generate court notices, summons, and legal documents automatically in seconds',
      },
      {
        icon: <AiOutlineSync size={32} color="#FFB940" />,
        title: 'Real-time case updates',
        desc: 'Keep all parties informed with automatic notifications of case status changes',
      },
    ],
  },
  {
    label: 'Hearings',
    image: shippingImg,
    title: 'Efficient & organized hearing management',
    desc: 'Experience streamlined hearing scheduling with our comprehensive solutions',
    pointers: [
      {
        icon: <AiOutlineDollarCircle size={32} color="#FFB940" />,
        title: 'Digital hearing rooms',
        desc: 'Conduct virtual hearings with integrated video conferencing and digital evidence presentation',
      },
      {
        icon: <MdOutlineReplay size={32} color="#FFB940" />,
        title: 'Flexible rescheduling',
        desc: 'Handle hearing postponements and rescheduling with automated calendar management',
      },
      {
        icon: <AiOutlineThunderbolt size={32} color="#FFB940" />,
        title: 'Quick hearing summaries',
        desc: 'Generate detailed hearing reports and minutes automatically for accurate record-keeping',
      },
    ],
  },
  {
    label: 'Analytics',
    image: reconciliationImg,
    title: 'Comprehensive legal analytics and reporting',
    desc: 'Keep your court operations data-driven with detailed analytics and insights',
    pointers: [
      {
        icon: <MdOutlineScale size={32} color="#FFB940" />,
        title: 'Case outcome analysis',
        desc: 'Track case resolutions, judgments, and legal precedents for informed decision-making',
      },
      {
        icon: <FaHandHoldingUsd size={32} color="#FFB940" />,
        title: 'Court efficiency metrics',
        desc: 'Monitor court performance, hearing backlogs, and processing times for optimization',
      },
      {
        icon: <MdOutlineGavel size={32} color="#FFB940" />,
        title: 'Legal compliance tracking',
        desc: 'Ensure adherence to legal procedures and deadlines with automated compliance monitoring',
      },
    ],
  },
];

const FeaturesSection = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="features-section">
      <Container sx={{ maxWidth: '90% !important', width: '90% !important', alignItems: 'center' }}>
        <Typography
          fontSize={"40px"}
          align="center"
          sx={{
            fontWeight: 300,
            mt: 1,
            mb: 3,
            color: '#222',
            fontFamily: 'serif',
            lineHeight: 1.2,
          }}
        >
          Transforming Legal{' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 700, fontStyle: 'italic' }}>
            Justice
          </Box>
          {' '}for{' '}
          <Box component="span" sx={{ fontWeight: 600 }}>
            Digital Excellence
          </Box>
        </Typography>
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          variant="scrollable"
          scrollButtons="auto"
          align="center"
          sx={{
            mb: 8,
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
        <Grid container spacing={4} alignItems="center" justifyContent="center">
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
