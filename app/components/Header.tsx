import React from 'react';
import { Box, Typography } from '@mui/material';
import SketchyTextField from './ui/SketchyTextField';
import SketchyButton from './ui/SketchyButton';
import SketchyIconButton from './ui/SketchyIconButton';
import Logo from '../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '2px solid black', // Example sketchy border
        backgroundColor: 'transparent', // Changed to transparent
        width: '100%',
      }}
    >
      {/* Left section: Orders and Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <SketchyIconButton>
          {/* Placeholder for Orders Icon */}
          <Typography variant="body1">📋</Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Indie Flower", cursive' }}>Orders</Typography>
        </SketchyIconButton>
        <SketchyIconButton>
          {/* Placeholder for Profile Icon */}
          <Typography variant="body1">👤</Typography>
        </SketchyIconButton>
      </Box>

      {/* Middle section: Search Bar */}
      <Box sx={{ flexGrow: 1, mx: '2rem', maxWidth: '500px' }}>
        <SketchyTextField
          fullWidth
          placeholder="Search in Kalbas"
          variant="outlined"
          sx={{ borderRadius: '8px', '& fieldset': { border: 'none' } }}
        />
      </Box>

      {/* Right section: Address and Logo */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Placeholder for Address Icon */}
          <Typography variant="body1">📍</Typography>
          <Typography variant="body1" sx={{ fontFamily: '"Indie Flower", cursive' }}>Your Address Here</Typography>
        </Box>
        <Box
          component="img"
          src={Logo}
          alt="Kalbas Logo"
          sx={{ width: 80, height: 80 }}
        />
      </Box>
    </Box>
  );
};

export default Header; 