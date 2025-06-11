import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyContainer from './SketchyContainer';

interface SketchyCardProps {
  image: string;
  categoryName: string;
  onClick?: () => void;
}

const StyledCardContent = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  width: '100%',
  height: '100%',
  // disable ripple effect, as it's handled by SketchyContainer if ButtonBase is used as a child
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const SketchyCard: React.FC<SketchyCardProps> = ({ image, categoryName, onClick }) => {
  return (
    <SketchyContainer component={ButtonBase} onClick={onClick} sx={{ width: '150px', height: '150px' }}>
      <StyledCardContent>
        <Box
          component="img"
          src={image}
          alt={categoryName}
          sx={{ width: 80, height: 80, objectFit: 'contain' }}
        />
        <Typography variant="body1" sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
          {categoryName}
        </Typography>
      </StyledCardContent>
    </SketchyContainer>
  );
};

export default SketchyCard; 