import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Amit Pandey',
      role: 'Online Retailer',
      comment: 'ShipMaxx has helped us significantly in processing our shipping requirements efficiently. The dashboard gives us an organized view of operations with an automated order management system.',
      rating: 4
    },
    {
      name: 'Smitha Reddy',
      role: 'Business Owner',
      comment: 'ShipMaxx has tremendously improved our operations. Their automated solutions for processing bulk orders have helped us expand our customer base.',
      rating: 5
    },
    {
      name: 'Karan Mehra',
      role: 'E-commerce Manager',
      comment: 'Working with ShipMaxx has been a fantastic experience. The real-time tracking facility helps us maintain complete transparency with our customers.',
      rating: 4
    }
  ];

  return (
    <section className="testimonials-section" style={{ backgroundColor: "#ffffff" }}>
      <Container sx={{ maxWidth: '90% !important', width: '90% !important' }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 400,
            mb: 6,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Hear From {' '}
          <Box component="span" sx={{ color: '#f8b217', fontWeight: 600 }}>
            Our Clients
          </Box>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: 400,
            mt: '-2%',
            mb: 4,
            color: '#222',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          See how brands like yours are achieving their eCommerce success with us
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <div
                className="testimonial-card"
                style={{
                  backgroundColor: "#ebebeb",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "24px",
                  padding: "32px 28px",
                  minHeight: 280,
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div className="rating" style={{ marginBottom: 16 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="star"
                      style={{
                        fontSize: "2.2rem",
                        color: "#FFC107",
                        margin: "0 2px",
                        verticalAlign: "middle",
                        display: "inline-block",
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <Typography
                  className="testimonial-text"
                  sx={{
                    fontStyle: "normal",
                    color: "#222",
                    mb: 3,
                    fontSize: "1.08rem",
                  }}
                >
                  "{testimonial.comment}"
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#222",
                    mt: 2,
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  className="role"
                  sx={{
                    color: "#666",
                    fontSize: "1rem",
                  }}
                >
                  {testimonial.role}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
