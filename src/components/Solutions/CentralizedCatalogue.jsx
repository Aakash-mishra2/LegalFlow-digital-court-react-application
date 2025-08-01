import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

// Import images from /src/assets/solutionsImages
import img1 from '../../assets/front/images/miniWarehouse.png';
import img2 from '../../assets/front/images/miniWarehouse.png';
import img3 from '../../assets/front/images/miniWarehouse.png';
import img4 from '../../assets/front/images/miniWarehouse.png';
import img5 from '../../assets/front/images/miniWarehouse.png';
import img6 from '../../assets/front/images/miniWarehouse.png';
import FinalCTASection from '../sections/FinalCTASection';
const floatSections = [
    {
        img: img1,
        title: "Centralized Catalogue Management",
        desc: "Effortlessly sync your product listings across all major e-commerce platforms like Amazon, Flipkart, and Shopify from one centralized dashboard. This ensures uniformity across channels, eliminates the need for multiple logins, and drastically reduces manual errors, giving you more time to focus on growth and strategy.",
        imgLeft: true,
    },
    {
        img: img2,
        title: "Bulk Product Uploads",
        desc: "Easily update your product details, including descriptions, images, and prices, across multiple platforms with just a few clicks. No more juggling between different tabs or manually updating each listing—ShipMaxx automates the process, ensuring your catalog is always accurate and up-to-date across all your sales channels.",
        imgLeft: false,
    },
    {
        img: img3,
        title: "Automated Tax & Compliance",
        desc: "Keep track of all product variants, including different sizes, colors, and models, from a single dashboard. This feature makes it easy to update and manage each variant, ensuring consistent and accurate listings across platforms while offering customers a smooth shopping experience with the correct product options.",
        imgLeft: true,
    },
    {
        img: img4,
        title: "Multi-Channel Listing",
        desc: "Quickly adjust and update pricing across all platforms to respond to changing market conditions or competitor strategies. With centralized pricing management, you can easily maintain competitive pricing, run promotions, and ensure consistency across all your e-commerce channels, keeping your business agile and profitable.",
        imgLeft: false,
    },
    {
        img: img5,
        title: "Smart Inventory Sync",
        desc: "Quickly adjust and update pricing across all platforms to respond to changing market conditions or competitor strategies. With centralized pricing management, you can easily maintain competitive pricing, run promotions, and ensure consistency across all your e-commerce channels, keeping your business agile and profitable.",
        imgLeft: true,
    },
    {
        img: img6,
        title: "Advanced Analytics",
        desc: "Quickly adjust and update pricing across all platforms to respond to changing market conditions or competitor strategies. With centralized pricing management, you can easily maintain competitive pricing, run promotions, and ensure consistency across all your e-commerce channels, keeping your business agile and profitable.",
        imgLeft: false,
    },
];

export default function CentralizedCatalogue() {
    return (
        <Box sx={{ background: "#fff" }}>
            {/* Hero Section */}
            <Box sx={{ py: { xs: 6, md: 8 }, textAlign: 'center', background: '#fff' }}>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#222', mb: 0 }}>
                    Centralized product cataloging for
                </Typography>
                <Typography variant="h3" sx={{ color: '#f8b217', fontWeight: 800, mb: 2 }}>
                    seamless omni-channel control
                </Typography>
                <Typography sx={{ maxWidth: '70%', mx: 'auto', color: '#555', fontSize: 16 }}>
                    Welcome to the future of catalog management where you can say goodbye to the hassle of juggling multiple tabs and platforms. You can effortlessly update, manage, and track your product listings and inventory from a single unified window, experiencing seamless control and efficiency in your e-commerce operations like never before.
                </Typography>
            </Box>

            {/* Sync Platform Section */}
            <Box sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#f8b217',
                borderRadius: '20px',
                // px: { xs: 2, md: 8 },
                // py: { xs: 4, md: 6 },
                px: 6,
                maxWidth: '80%',
                mx: 'auto',
                mb: 8,
                mt: 8,
                overflow: 'visible',
            }}>
                <Box sx={{ flex: 1, color: '#fff', pr: { xs: 0, md: 6 }, zIndex: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
                        Sync your E-commerce business to one platform
                    </Typography>
                    <Typography sx={{ fontSize: 16, color: '#fff', opacity: 0.95 }}>
                        Effortlessly manage your entire e-commerce catalog from a single window with powerful tools designed to simplify product listings, stock management, and pricing updates across all your sales channels.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        position: 'relative',
                        minHeight: { xs: 180, md: 260 }
                    }}
                >
                    <img
                        src={require('../../assets/images/features/cpc.png')}
                        alt="Sync Illustration"
                        style={{
                            maxWidth: '420px',
                            width: '100%',
                            borderRadius: 12,
                            position: 'absolute',
                            right: 0,
                            top: '-80px',
                            right: '40px',
                            zIndex: 2,
                            //boxShadow: '0 8px 32px 0 #00000018',
                        }}
                    />
                </Box>
            </Box>

            {/* Float Sections */}
            <Box sx={{ maxWidth: '80%', mx: 'auto', mb: 8, mt: 12 }}>
                {floatSections.map((section, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: section.imgLeft ? 'row' : 'row-reverse' },
                            alignItems: 'center',
                            mb: 7,
                            gap: 4,
                        }}
                    >
                        <Box sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img
                                src={section.img}
                                alt={section.title}
                                style={{
                                    width: '500px',
                                    maxWidth: '100%',
                                    marginLeft: "20px",
                                    border: '2px solid #f8b217',
                                    borderRadius: 16,
                                    background: '#fff',
                                    boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
                                }}
                            />
                        </Box>
                        <Box sx={{ flex: 1, gap: 1 }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1, color: '#222' }}>
                                {section.title}
                            </Typography>
                            <Typography sx={{ color: '#555', fontSize: 16, fontFamily: 'roboto' }}>
                                {section.desc}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Benefits Grid */}
            <Box sx={{ background: '#faf8f2', py: 8 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700, mb: 6, color: '#222' }}>
                    How does centralized catalog management <span style={{ color: '#f8b217' }}>benefit your business?</span>
                </Typography>
                <Grid container spacing={4} sx={{ maxWidth: 1500, mx: 'auto' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background: '#fff',
                            border: '3px solid #ffe6a3',
                            borderRadius: '32px',
                            p: { xs: 3, md: 5 },
                            minHeight: 220,
                            boxShadow: '0 2px 12px 0 #f8b21722',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            mb: { xs: 3, md: 0 }
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
                                    Simplified operations
                                </Typography>
                                <Typography sx={{ color: '#222', fontSize: 17 }}>
                                    Centralized catalog management eliminates the need to log in and update multiple platforms separately. With one unified dashboard, you can easily manage product listings, pricing, and stock across Amazon, Flipkart, Shopify, and more, saving time and reducing the risk of manual errors.
                                </Typography>
                            </Box>
                            <Box sx={{ flexShrink: 0 }}>
                                <img src={require('../../assets/images/features/cpc.png')} alt="Simplified operations" style={{ width: 110, height: 110 }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background: '#fff',
                            border: '2px solid #ececec',
                            borderRadius: '32px',
                            p: { xs: 3, md: 5 },
                            minHeight: 220,
                            boxShadow: '0 2px 12px 0 #00000010',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            mb: { xs: 3, md: 0 }
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
                                    Real-time inventory control
                                </Typography>
                                <Typography sx={{ color: '#222', fontSize: 17 }}>
                                    Easily monitor stock levels across all platforms in real-time, preventing stockouts or overstocking, ensuring you always know how much inventory is available, allowing you to make informed decisions, restock on time, and avoid missing out on sales opportunities.
                                </Typography>
                            </Box>
                            <Box sx={{ flexShrink: 0 }}>
                                <img src={require('../../assets/images/features/cpc.png')} alt="Real-time inventory control" style={{ width: 110, height: 110 }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background: '#fff',
                            border: '2px solid #ececec',
                            borderRadius: '32px',
                            p: { xs: 3, md: 5 },
                            minHeight: 220,
                            boxShadow: '0 2px 12px 0 #00000010',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
                                    Consistent product information
                                </Typography>
                                <Typography sx={{ color: '#222', fontSize: 17 }}>
                                    Keep your product details consistent across all sales channels and ensure that updates made to product descriptions, pricing, or variants are instantly reflected on all platforms, ensuring uniformity and improving the customer experience.
                                </Typography>
                            </Box>
                            <Box sx={{ flexShrink: 0 }}>
                                <img src={require('../../assets/images/features/cpc.png')} alt="Consistent product information" style={{ width: 110, height: 110 }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            background: '#fff',
                            border: '2px solid #ececec',
                            borderRadius: '32px',
                            p: { xs: 3, md: 5 },
                            minHeight: 220,
                            boxShadow: '0 2px 12px 0 #00000010',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                        }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
                                    Better decision-making with data insights
                                </Typography>
                                <Typography sx={{ color: '#222', fontSize: 17 }}>
                                    Gain valuable insights into your product performance across multiple channels, helping you to analyze which products perform best, track pricing trends, and identify areas for optimization, helping you make smarter business decisions and drive growth.
                                </Typography>
                            </Box>
                            <Box sx={{ flexShrink: 0 }}>
                                <img src={require('../../assets/images/features/cpc.png')} alt="Better decision-making" style={{ width: 110, height: 110 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <FinalCTASection />
        </Box>
    );
}
