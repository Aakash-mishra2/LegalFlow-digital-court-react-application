
import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box, TextField, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/loginSlice';

const Authenticate = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    dispatch(login({
      userId: '12345',
      userName: formData.name || 'User',
      email: formData.email
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: '20px' }}>
            <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 700 }}>
              {isLogin ? 'Login' : 'Sign Up'}
            </Typography>
            
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
              )}
              
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                margin="normal"
                required
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: '#f8b217',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: '#e09900'
                  }
                }}
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
            </form>
            
            <Box textAlign="center">
              <Typography variant="body2">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <Button
                  onClick={() => setIsLogin(!isLogin)}
                  sx={{ color: '#f8b217' }}
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </Button>
              </Typography>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              Welcome to CCMS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Your digital gateway to efficient court case management. 
              Join thousands of users who trust our platform for their legal proceedings.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button component={Link} to="/" variant="outlined">
                Back to Home
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Authenticate;
