import React, { useState, useEffect } from 'react';
import { Box, Typography, Divider, Alert, CircularProgress } from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyFilter from '../components/ui/SketchyFilter';
import SketchyLogo from '../components/ui/SketchyLogo';
import GoogleIcon from '../assets/svg/google-icon.svg';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';

interface LoginForm {
  identifier: string;
  password: string;
}

interface FormErrors {
  identifier?: string;
  password?: string;
}

const LoginRoute: React.FC = () => {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, isAuthenticated } = useAuth();
  
  const [formData, setFormData] = useState<LoginForm>({
    identifier: '',
    password: '',
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

    if (!formData.identifier.trim()) {
      errors.identifier = 'Email or username is required';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof LoginForm) => (
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
      await login(formData);
      // Navigation will be handled by useEffect when isAuthenticated changes
    } catch (error) {
      // Error is already handled by useAuth hook
      console.error('Login submission error:', error);
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
          placeholder="Username or Email"
          type="text"
          variant="outlined"
          value={formData.identifier}
          onChange={handleInputChange('identifier')}
          error={!!formErrors.identifier}
          helperText={formErrors.identifier}
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
              <span style={{ opacity: 0 }}>LOGIN</span>
            </>
          ) : (
            'LOGIN'
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
        Log in with Google
      </SketchyButton>

      <Typography>
        Don't have an account?{' '}
        <Link to="/auth/signup" style={{ color: '#3d84f5', fontWeight: 'bold' }}>
          Sign up
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginRoute;