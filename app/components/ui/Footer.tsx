import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  background: '#fff',
  boxShadow: '0 -2px 0px black',
  padding: theme.spacing(4, 2, 2, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginTop: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    borderTop: '1px solid black',
    background: '#fff',
    filter: 'url(#sketchy-filter)',
    boxShadow: '0 -2px 0px black',
    borderRadius: 0,
  },
}));

const Footer: React.FC = () => {
  return (
    <footer>
      <FooterContainer>
        <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 700 }}>
          Kalbas Food Ordering
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'inherit' }}>
          &copy; {new Date().getFullYear()} Kalbas. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link href="#" underline="hover" sx={{ color: 'primary.main', fontFamily: 'inherit' }}>
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'primary.main', fontFamily: 'inherit' }}>
            Terms of Service
          </Link>
          <Link href="#" underline="hover" sx={{ color: 'primary.main', fontFamily: 'inherit' }}>
            Contact Us
          </Link>
        </Box>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'inherit', mt: 1 }}>
          Made with ❤️ for demo purposes.
        </Typography>
      </FooterContainer>
    </footer>
  );
};

export default Footer; 