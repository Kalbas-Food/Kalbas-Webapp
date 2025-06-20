import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Alert, CircularProgress } from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyFilter from '../components/ui/SketchyFilter';
import GoogleIcon from '../assets/svg/google-icon.svg';
import { Link, useNavigate } from 'react-router';
import SketchyLogo from '../components/ui/SketchyLogo';
import { useAuth } from '../hooks/useAuth';

interface SignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUpRoute: React.FC = () => {
  const navigate = useNavigate();
  const { signup, isLoading, error, clearError, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState<SignupForm>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof SignupForm) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
    
    // Clear API error when user starts typing
    if (error) {
      clearError();
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await signup(formData);
      // Navigation will be handled by useEffect when isAuthenticated changes
    } catch (error) {
      // Error is already handled by useAuth hook
      console.error('Signup submission error:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
      }}
    >
      <SketchyFilter />
      <SketchyLogo size={100} sx={{ marginBottom: '2rem' }} />

      <Box sx={{ width: '100%', maxWidth: '400px' }}>
        {/* Error Alert */}
        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 2 }}
            onClose={clearError}
          >
            {error}
          </Alert>
        )}

        <SketchyTextField
          fullWidth
          placeholder="Username"
          variant="outlined"
          value={formData.username}
          onChange={handleInputChange('username')}
          error={!!formErrors.username}
          helperText={formErrors.username}
          disabled={isLoading}
          sx={{ marginBottom: '1.5rem' }}
        />
        
        <SketchyTextField
          fullWidth
          placeholder="Email Address"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange('email')}
          error={!!formErrors.email}
          helperText={formErrors.email}
          disabled={isLoading}
          sx={{ marginBottom: '1.5rem' }}
        />
        
        <SketchyTextField
          fullWidth
          placeholder="Password"
          type="password"
          variant="outlined"
          value={formData.password}
          onChange={handleInputChange('password')}
          error={!!formErrors.password}
          helperText={formErrors.password}
          disabled={isLoading}
          sx={{ marginBottom: '1.5rem' }}
        />
        
        <SketchyTextField
          fullWidth
          placeholder="Confirm Password"
          type="password"
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={!!formErrors.confirmPassword}
          helperText={formErrors.confirmPassword}
          disabled={isLoading}
          sx={{ marginBottom: '1.5rem' }}
        />
        
        <SketchyButton
          fullWidth
          variant="contained"
          size="large"
          type="submit"
          disabled={isLoading}
          sx={{ 
            padding: '0.8rem', 
            fontSize: '1.5rem', 
            marginBottom: '1.5rem',
            position: 'relative',
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress 
                size={20} 
                sx={{ 
                  color: 'inherit', 
                  mr: 1,
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }} 
              />
              <span style={{ opacity: 0 }}>SIGN UP</span>
            </>
          ) : (
            'SIGN UP'
          )}
        </SketchyButton>
      </Box>

      <Divider sx={{ width: '100%', maxWidth: '400px', marginBottom: '1.5rem' }}>
        <Typography>OR</Typography>
      </Divider>

      <SketchyButton
        fullWidth
        variant="outlined"
        size="large"
        disabled={isLoading}
        startIcon={<img src={GoogleIcon} alt="Google icon" style={{ width: 24, height: 24 }} />}
        sx={{
          padding: '0.8rem',
          fontSize: '1.2rem',
          marginBottom: '2rem',
          maxWidth: '400px',
        }}
      >
        Sign up with Google
      </SketchyButton>

      <Typography>
        Already have an account?{' '}
        <Link to="/auth/login" style={{ color: '#3d84f5', fontWeight: 'bold' }}>
          Log in
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpRoute;