// filepath: /home/orange/Desktop/projects/shipmax-clone/src/components/Footer.jsx
import React from 'react';
import { Box, Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/shipmaxx-logo.png"; // Update with new logo

const Footer = () => (
    <Box sx={{ background: '#5a5a5a', color: '#fff', pt: 4, pb: 6, fontFamily: 'Inter, sans-serif' }}>
        <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="ShipMaxx Logo"
                            style={{
                                height: '40px',
                                width: 'auto',
                                marginBottom: 4,
                                paddingLeft: '-8px',
                            }}
                        />
                    </Link>
                    <Box display="flex" alignItems="center" mb={1}>
                        <FaEnvelope style={{ marginRight: 8 }} />
                        <MuiLink href="mailto:support@shipmaxx.in" sx={{ color: '#fff', fontSize: 14, textDecoration: 'none' }}>
                            support@shipmaxx.in
                        </MuiLink>
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: 14, mt: 2 }}>Head Office:</Typography>
                    <Box display="flex" alignItems="flex-start" mt={0.5}>
                        <FaMapMarkerAlt style={{ marginRight: 8, marginTop: 3 }} />
                        <Typography sx={{ fontSize: 13, color: '#fff' }}>
                            6th Floor, Tower A, Spaze I-Tech Park, Sector 49, Gurugram,<br />
                            Haryana - 122001
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Company</Typography>
                    <Typography sx={{ fontSize: 14, mb: 0.5 }}>
                        <MuiLink href="#" sx={{ color: '#fff', textDecoration: 'none' }}>About Us</MuiLink>
                    </Typography>
                    <Typography sx={{ fontSize: 14, mb: 0.5 }}>
                        <MuiLink href="#" sx={{ color: '#fff', textDecoration: 'none' }}>Contact Us</MuiLink>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                        <MuiLink href="#" sx={{ color: '#fff', textDecoration: 'none' }}>FAQs</MuiLink>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <Box>
                        <Box display="flex" justifyContent="flex-end" mb={2} gap={2}>
                            <MuiLink href="#" sx={{ color: '#fff', fontSize: 20 }}><FaFacebookF /></MuiLink>
                            <MuiLink href="#" sx={{ color: '#fff', fontSize: 20 }}><FaInstagram /></MuiLink>
                            <MuiLink href="#" sx={{ color: '#fff', fontSize: 20 }}><FaLinkedinIn /></MuiLink>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ borderTop: '1px solid #bdbdbd', mt: 3, pt: 2, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', fontSize: 13 }}>
                <Typography sx={{ color: '#fff', mb: { xs: 1, md: 0 } }}>
                    © Losung360 Pvt. Ltd. All rights reserved.
                </Typography>
                <Box sx={{ color: '#fff', textAlign: { xs: 'left', md: 'right' } }}>
                    <MuiLink href="#" sx={{ color: '#fff', mx: 1, fontSize: 13, textDecoration: 'none' }}>Refunds and Cancellations</MuiLink> |
                    <MuiLink href="#" sx={{ color: '#fff', mx: 1, fontSize: 13, textDecoration: 'none' }}>Shipping Policy</MuiLink> |
                    <MuiLink href="#" sx={{ color: '#fff', mx: 1, fontSize: 13, textDecoration: 'none' }}>Privacy Policy</MuiLink> |
                    <MuiLink href="#" sx={{ color: '#fff', mx: 1, fontSize: 13, textDecoration: 'none' }}>Terms and Conditions</MuiLink>
                </Box>
            </Box>
        </Container>
    </Box>
);

export default Footer;