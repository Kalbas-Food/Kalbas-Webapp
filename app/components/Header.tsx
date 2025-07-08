import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Divider, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyIconButton from './ui/SketchyIconButton';
import SketchyPopover from './ui/SketchyPopover';
import SketchyMenuItem from './ui/SketchyMenuItem';
import SketchyAvatar from './ui/SketchyAvatar';
import SketchyLogo from './ui/SketchyLogo';
import receiptIcon from '../assets/img/icons/receipt.png';
import profileIcon from '../assets/img/icons/profile.png';
import pinIcon from '../assets/img/icons/pin.png';
import walletIcon from '../assets/img/icons/wallet.png';
import inviteIcon from '../assets/img/icons/new-message.png';
import exitIcon from '../assets/img/icons/exit.png';
import userImage from '../assets/img/user/mahdi-haeri.jpg';
import SketchyTextField from './ui/SketchyTextField';
import SketchyDrawer from './ui/SketchyDrawer';
import OrderHistoryItem from './ui/OrderHistoryItem';
import sunnyIcon from '../assets/img/icons/sunny.png';
import moonIcon from '../assets/img/icons/new-moon.png';
import SketchyButton from './ui/SketchyButton';
import { useThemeMode } from './ui/ThemeModeProvider';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import SketchyWalletModal from './ui/SketchyWalletModal';
import SketchyContainer from './ui/SketchyContainer';
import { IconButton } from '@mui/material';
import editIcon from '../assets/img/icons/edit.png';
import basketIcon from '../assets/img/icons/basket.png';
import Radio from '@mui/material/Radio';

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

const mockAddresses = [
  { id: 1, label: 'Home', address: '123 Main St, City, Country' },
  { id: 2, label: 'Work', address: '456 Office Rd, City, Country' },
  { id: 3, label: 'Dorm', address: 'Shahid Bastami Dormitory, Valiasr, Hafez, Ayatollah Taleghani after Ghafarzadeh, Plaque 396' },
];

const Header: React.FC = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggleMode } = useThemeMode();
  const isDarkMode = mode === 'dark';
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [addressModalOpen, setAddressModalOpen] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState<number>(mockAddresses[0].id);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileNavigate = () => {
    handleClose();
    navigate('/account');
  };

  const handleWalletClick = () => {
    setWalletModalOpen(true);
    handleClose();
  };

  const handleInviteClick = () => {
    handleClose();
    navigate('/invite-friends');
  };

  const handleLogout = async () => {
    handleClose();
    await logout();
    navigate('/auth/login');
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

  useEffect(() => {
    if (addressModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [addressModalOpen]);

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
          onClick={() => navigate('/')}
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          aria-label="Go to home page"
          tabIndex={0}
          role="button"
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
        >
          <SketchyLogo size={65} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem', direction: 'ltr' }}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            onClick={() => setAddressModalOpen(true)}
            tabIndex={0}
            role="button"
            aria-label="Select address"
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setAddressModalOpen(true); }}
          >
            <Box
              component="img"
              src={pinIcon}
              alt="Location Pin"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="h6" sx={{ fontFamily: 'Indie Flower, cursive', fontWeight: 'bold', lineHeight: 1.2, color: 'inherit' }}>
              Shahid Bastami Dormitory
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontFamily: 'Indie Flower, cursive', color: 'inherit' }}>
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

      {/* Address Modal */}
      {addressModalOpen && (
        <Box className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/30" onClick={() => setAddressModalOpen(false)} role="presentation" style={{ minHeight: '100vh', minWidth: '100vw' }}>
          <Box className="flex items-center justify-center w-full h-full" style={{ pointerEvents: 'none' }}>
            <SketchyContainer
              disableActiveTransform
              className="relative w-full flex flex-col items-center gap-6 shadow-xl"
              sx={{
                background: theme.palette.background.paper,
                borderRadius: 12,
                minWidth: { xs: '90vw', sm: 350 },
                maxWidth: { xs: '95vw', sm: 420 },
                px: { xs: 2, sm: 4 },
                py: { xs: 4, sm: 6 },
                boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)',
              }}
              onClick={e => { e.stopPropagation(); }}
              style={{ pointerEvents: 'auto' }}
            >
              <IconButton
                onClick={() => setAddressModalOpen(false)}
                aria-label="Close"
                sx={{
                  position: 'absolute',
                  width: 40,
                  height: 40,
                  top: 12,
                  right: 12,
                  color: theme.palette.text.primary,
                  background: 'transparent',
                  boxShadow: 'none',
                  '&:hover': { background: theme.palette.action.hover },
                }}
              >
                <span style={{ fontSize: 32, fontWeight: 'bold', color: 'inherit', lineHeight: 1 }}>&times;</span>
              </IconButton>
              <Typography variant="h5" className="font-extrabold text-center" sx={{ fontFamily: 'inherit', fontWeight: 800, fontSize: { xs: 20, sm: 26 } }}>
                Select Address
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                {mockAddresses.map(addr => (
                  <SketchyContainer
                    key={addr.id}
                    disableActiveTransform
                    className="flex items-center justify-between gap-3 px-3 py-3"
                    sx={{
                      cursor: 'pointer',
                      transition: 'border 0.2s, background 0.2s',
                    }}
                    onClick={() => setSelectedAddressId(addr.id)}
                  >
                    <Radio
                      checked={selectedAddressId === addr.id}
                      onChange={() => setSelectedAddressId(addr.id)}
                      value={addr.id}
                      color="primary"
                      sx={{ mr: 1 }}
                      inputProps={{ 'aria-label': `Select ${addr.label}` }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, fontFamily: 'inherit', color: 'text.primary', mb: 0.5 }}>
                        {addr.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'inherit', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {addr.address}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton aria-label="Edit address" size="small" sx={{ p: 0, background: 'none', border: 'none', boxShadow: 'none', minWidth: 0 }}>
                        <Box component="img" src={editIcon} alt="Edit" sx={{ width: 22, height: 22}} />
                      </IconButton>
                      <IconButton aria-label="Delete address" size="small" sx={{ p: 0, background: 'none', border: 'none', boxShadow: 'none', minWidth: 0 }}>
                        <Box component="img" src={basketIcon} alt="Delete" sx={{ width: 22, height: 22 }} />
                      </IconButton>
                    </Box>
                  </SketchyContainer>
                ))}
              </Box>
              <SketchyButton
                variant="outlined"
                className="w-full mt-2 py-3 text-lg font-bold"
                sx={{ borderRadius: 10, fontWeight: 700, fontSize: 18, mt: 2 }}
                onClick={() => { setAddressModalOpen(false); /* navigate('/add-address') in future */ }}
              >
                + Add New Address
              </SketchyButton>
            </SketchyContainer>
          </Box>
        </Box>
      )}

      <SketchyWalletModal
        open={walletModalOpen}
        onClose={() => setWalletModalOpen(false)}
        currentBalance={120000}
      />
    </Box>
  );
};

export default Header;