import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyIconButton from './ui/SketchyIconButton';
import SketchyPopover from './ui/SketchyPopover';
import receiptIcon from '../assets/img/icons/receipt.png';
import profileIcon from '../assets/img/icons/profile.png';
import pinIcon from '../assets/img/icons/pin.png';
import walletIcon from '../assets/img/icons/wallet.png';
import inviteIcon from '../assets/img/icons/new-message.png';
import exitIcon from '../assets/img/icons/exit.png';
import logo from '../assets/logo.svg';
import userImage from '../assets/img/user/mahdi-haeri.jpg';
import SketchyTextField from './ui/SketchyTextField';

const StyledMenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        transition: 'transform 0.3s ease-in-out', // Smooth animation for slide in/out
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)', // Apply slide animation
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '0.5rem 1rem', md: '1rem 2rem' },
        width: '100%',
        flexWrap: 'wrap',
        gap: { xs: '1rem', md: '1.5rem' },

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
          src={logo}
          alt="Kalbas Logo"
          sx={{ width: { xs: 50, md: 65 }, height: { xs: 50, md: 65 } }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem', direction: 'ltr' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Box
              component="img"
              src={pinIcon}
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
            src={receiptIcon}
            alt="Orders"
            sx={{ width: 30, height: 30 }}
          />
        </SketchyIconButton>
        <SketchyIconButton onClick={handleProfileClick}>
          <Box
            component="img"
            src={profileIcon}
            alt="Profile"
            sx={{ width: 30, height: 30 }}
          />
        </SketchyIconButton>
      </Box>

      {/* Profile Popover */}
      <SketchyPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {/* Profile Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Avatar
            src={userImage}
            alt="Mahdi Haeri"
            sx={{ 
              width: 50, 
              height: 50,
              border: '2px solid black',
            }}
          />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
              Mahdi Haeri
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                fontFamily: 'inherit',
                color: 'text.secondary',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
              onClick={() => {/* Navigate to profile */}}
            >
              View Profile
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Menu Items */}
        <StyledMenuItem>
          <Box
            component="img"
            src={walletIcon}
            alt="Wallet"
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="body1" sx={{ fontFamily: 'inherit' }}>
            Internal Wallet
          </Typography>
        </StyledMenuItem>

        <StyledMenuItem>
          <Box
            component="img"
            src={inviteIcon}
            alt="Invite"
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="body1" sx={{ fontFamily: 'inherit' }}>
            Invite Friends
          </Typography>
        </StyledMenuItem>

        <StyledMenuItem>
          <Box
            component="img"
            src={exitIcon}
            alt="Logout"
            sx={{ width: 24, height: 24 }}
          />
          <Typography variant="body1" sx={{ fontFamily: 'inherit', color: 'error.main' }}>
            Logout
          </Typography>
        </StyledMenuItem>
      </SketchyPopover>
    </Box>
  );
};

export default Header;