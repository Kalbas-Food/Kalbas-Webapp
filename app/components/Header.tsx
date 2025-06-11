import React from 'react';
import { Box, Typography } from '@mui/material';
import SketchyTextField from './ui/SketchyTextField';
import SketchyButton from './ui/SketchyButton';
import SketchyIconButton from './ui/SketchyIconButton';
import Logo from '../assets/logo.svg';
import cartImage from '../assets/img/icons/cart.png';
import profileImage from '../assets/img/icons/profile.png';
import pinImage from '../assets/img/icons/pin.png';

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '0.5rem 1rem', md: '1rem 2rem' },
        position: 'relative',
        backgroundColor: 'transparent',
        width: '100%',
        zIndex: 1,
        flexWrap: 'wrap',
        gap: { xs: '1rem', md: '1.5rem' },

        // Sketchy bottom border
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: 'black',
          filter: 'url(#sketchy-filter)',
          boxShadow: '0px 2px 0px black',
        },
      }}
    >
      {/* Left section: Logo and Address */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Box
          component="img"
          src={Logo}
          alt="Kalbas Logo"
          sx={{ width: { xs: 50, md: 65 }, height: { xs: 50, md: 65 } }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem', direction: 'ltr' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Box
              component="img"
              src={pinImage}
              alt="Location Pin"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="h6" sx={{ fontFamily: '"Indie Flower", cursive', fontWeight: 'bold', lineHeight: 1.2 }}>
              Shahid Bastami Dormitory
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontFamily: '"Indie Flower", cursive' }}>
            Valiasr, Hafez, Ayatollah Taleghani after Ghafarzadeh, Plaque 396
          </Typography>
        </Box>
      </Box>

      {/* Middle section: Search Bar */}
      <Box sx={{ flexGrow: 1, mx: { xs: '0.5rem', md: '2rem' }, maxWidth: { xs: '100%', md: '500px' } }}>
        <SketchyTextField
          fullWidth
          placeholder="Search in Kalbas"
          variant="outlined"
          sx={{ borderRadius: '8px', '& fieldset': { border: 'none' } }}
        />
      </Box>

      {/* Right section: Orders and Profile */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <SketchyIconButton>
          <Box
            component="img"
            src={cartImage}
            alt="Orders"
            sx={{ width: 30, height: 30 }}
          />
        </SketchyIconButton>
        <SketchyIconButton>
          <Box
            component="img"
            src={profileImage}
            alt="Profile"
            sx={{ width: 30, height: 30 }}
          />
        </SketchyIconButton>
      </Box>
    </Box>
  );
};

export default Header;