import React, { useState } from 'react';
import { Box, Typography, Card, InputBase, useTheme } from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import { styled } from '@mui/material/styles';
import GiftImage from '../assets/img/icons/gift/gift-1.png';
import SketchySnackBar from '../components/ui/SketchySnackBar';

const MOCK_INVITE_LINK = 'https://kalbas.app/invite/abc123';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 24,
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.04)',
  background: theme.palette.background.paper,
  padding: '2.5rem 2rem',
  maxWidth: 540,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

function InviteFriendsRoute() {
  const [copied, setCopied] = useState(false);
  const theme = useTheme();

  function handleCopy() {
    navigator.clipboard.writeText(MOCK_INVITE_LINK);
    setCopied(true);
  }

  function handleCloseSnackbar() {
    setCopied(false);
  }

  return (
    <Box
      sx={{
        minHeight: '70vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 10,
        px: 2,
      }}
    >
      <StyledCard elevation={0}>
        <Typography variant="h5" className="font-bold mb-4 text-center" sx={{ color: theme.palette.text.primary }}>
          Invite Friends
        </Typography>
        <Typography variant="body1" className="mb-6 text-center" sx={{ color: theme.palette.text.secondary, maxWidth: 420 }}>
          Share the invite link below with your friends. When they sign up and place their first order, both you and your friend will receive a 20,000 Toman discount code as a gift!
        </Typography>
        <Box className="flex justify-center mb-8">
          <img src={GiftImage} alt="Gift" className="w-40 h-40" />
        </Box>
        <Box
          className="flex items-center w-full max-w-md rounded-xl px-3 py-2 mb-2"
          sx={{ background: theme.palette.background.default, border: `1px solid ${theme.palette.divider}` }}
        >
          <InputBase
            value={MOCK_INVITE_LINK}
            readOnly
            sx={{ flex: 1, fontSize: '1rem', color: theme.palette.text.primary, px: 1, background: 'transparent' }}
          />
          <SketchyButton
            variant="outlined"
            size="small"
            onClick={handleCopy}
            sx={{ ml: 1, minWidth: 0, px: 2 }}
          >
            Copy
          </SketchyButton>
        </Box>
        <SketchySnackBar
          open={copied}
          onClose={handleCloseSnackbar}
          message="Link copied!"
          autoHideDuration={2000}
        />
      </StyledCard>
    </Box>
  );
}

export default InviteFriendsRoute; 