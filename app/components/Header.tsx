import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Divider, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyIconButton from './ui/SketchyIconButton';
import SketchyPopover from './ui/SketchyPopover';
import SketchyMenuItem from './ui/SketchyMenuItem';
import SketchyAvatar from './ui/SketchyAvatar';
import receiptIcon from '../assets/img/icons/receipt.png';
import profileIcon from '../assets/img/icons/profile.png';
import pinIcon from '../assets/img/icons/pin.png';
import walletIcon from '../assets/img/icons/wallet.png';
import inviteIcon from '../assets/img/icons/new-message.png';
import exitIcon from '../assets/img/icons/exit.png';
import logo from '../assets/logo.svg';
import userImage from '../assets/img/user/mahdi-haeri.jpg';
import SketchyTextField from './ui/SketchyTextField';
import SketchyDrawer from './ui/SketchyDrawer';
import OrderHistoryItem from './ui/OrderHistoryItem';
import sunnyIcon from '../assets/img/icons/sunny.png';
import moonIcon from '../assets/img/icons/new-moon.png';
import SketchyButton from './ui/SketchyButton';
import { useThemeMode } from './ui/ThemeModeProvider';

const StyledMenuItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5),
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  padding: theme.spacing(1),
  borderRadius: '8px',
  transition: 'all 0.2s ease',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    '& .profile-link': {
      color: theme.palette.primary.main,
      transform: 'translateX(4px)',
    },
  },
}));

const mockOrders = [
  {
    restaurant: 'Pizza Palace',
    date: '2024-06-01 18:30',
    total: '$18.50',
    status: 'Delivered',
  },
  {
    restaurant: 'Burger House',
    date: '2024-05-28 12:15',
    total: '$12.00',
    status: 'Delivered',
  },
  {
    restaurant: 'Salad Bar',
    date: '2024-05-20 14:00',
    total: '$9.75',
    status: 'Pending',
  },
  {
    restaurant: 'Cafe Nafas',
    date: '2024-05-18 20:10',
    total: '$7.50',
    status: 'Delivered',
  },
  {
    restaurant: 'Bomb O Min',
    date: '2024-05-17 18:26',
    total: '$15.00',
    status: 'Delivered',
  },
  {
    restaurant: 'Aref Restaurant',
    date: '2024-05-16 14:45',
    total: '$11.25',
    status: 'Delivered',
  },
  {
    restaurant: 'Valiasr Ice Cream',
    date: '2024-05-15 15:27',
    total: '$5.00',
    status: 'Delivered',
  },
  {
    restaurant: 'Green Bowl',
    date: '2024-05-12 13:10',
    total: '$10.80',
    status: 'Delivered',
  },
  {
    restaurant: 'Pasta Point',
    date: '2024-05-10 19:00',
    total: '$13.40',
    status: 'Delivered',
  },
  {
    restaurant: 'Sushi Express',
    date: '2024-05-08 21:15',
    total: '$22.00',
    status: 'Delivered',
  },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleMode } = useThemeMode();
  const isDarkMode = mode === 'dark';

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileNavigate = () => {
    // Navigate to profile page
    handleClose();
  };

  const handleWalletClick = () => {
    // Handle wallet click
    handleClose();
  };

  const handleInviteClick = () => {
    // Handle invite click
    handleClose();
  };

  const handleLogout = () => {
    // Handle logout
    handleClose();
  };

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
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
        backgroundColor: theme.palette.background.paper,
        transition: 'transform 0.3s ease-in-out',
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '0.5rem 1rem', md: '1rem 2rem' },
        width: '100%',
        flexWrap: 'wrap',
        gap: { xs: '1rem', md: '1.5rem' },
        color: theme.palette.text.primary,
        boxShadow: 'none',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: theme.palette.text.primary,
          filter: 'url(#sketchy-filter)',
          boxShadow: `0px 2px 0px ${theme.palette.text.primary}`,
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
            <Typography variant="h6" sx={{ fontFamily: '"Indie Flower", cursive', fontWeight: 'bold', lineHeight: 1.2, color: 'inherit' }}>
              Shahid Bastami Dormitory
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontFamily: '"Indie Flower", cursive', color: 'inherit' }}>
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
        <SketchyIconButton onClick={handleDrawerOpen}>
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

      {/* Drawer for order history */}
      <SketchyDrawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
        <Typography variant="h5" sx={{ fontFamily: 'inherit', fontWeight: 'bold', mb: 3, color: 'inherit' }}>
          Order History
        </Typography>
        {mockOrders.map((order, idx) => (
          <OrderHistoryItem key={idx} {...order} />
        ))}
      </SketchyDrawer>

      {/* Profile Popover */}
      <SketchyPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        {/* Profile Section */}
        <StyledProfileSection onClick={handleProfileNavigate}>
          <SketchyAvatar
            src={userImage}
            alt="Mahdi Haeri"
            size={50}
          />
          <Box>
            <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 'bold', color: 'inherit' }}>
              Mahdi Haeri
            </Typography>
            <Typography 
              className="profile-link"
              variant="body2" 
              sx={{ 
                fontFamily: 'inherit',
                color: 'text.secondary',
                transition: 'all 0.2s ease',
              }}
            >
              View Profile
            </Typography>
          </Box>
        </StyledProfileSection>

        <Divider sx={{ my: 2 }} />

        {/* Menu Items */}
        <SketchyMenuItem
          icon={walletIcon}
          label="Internal Wallet"
          onClick={handleWalletClick}
        />

        <SketchyMenuItem
          icon={inviteIcon}
          label="Invite Friends"
          onClick={handleInviteClick}
        />

        <SketchyMenuItem
          icon={exitIcon}
          label="Logout"
          onClick={handleLogout}
          color="error.main"
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <SketchyButton
            variant={isDarkMode ? 'contained' : 'outlined'}
            onClick={toggleMode}
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2.5,
              py: 1.2,
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src={isDarkMode ? sunnyIcon : moonIcon}
              alt={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              sx={{ width: 28, height: 28, mr: 1, filter: 'none !important' }}
            />
            <Typography sx={{ fontFamily: 'inherit', fontWeight: 600, color: isDarkMode ? '#fff' : '#222', filter: 'none !important' }}>
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Typography>
          </SketchyButton>
        </Box>
      </SketchyPopover>
    </Box>
  );
};

export default Header;