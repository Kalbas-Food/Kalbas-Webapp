import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyContainer from './SketchyContainer';

interface SketchyCardProps {
  image: string;
  categoryName: string;
  onClick?: () => void;
  size?: 'small' | 'medium';
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
  color: theme.palette.text.primary,
  // disable ripple effect, as it's handled by SketchyContainer if ButtonBase is used as a child
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
}));

const SketchyCard: React.FC<SketchyCardProps> = ({ image, categoryName, onClick, size = 'medium' }) => {
  const isSmall = size === 'small';
  const containerSize = isSmall ? '100px' : '150px';
  const imageSize = isSmall ? 50 : 80;
  const textSize = isSmall ? 'caption' : 'body1';

  return (
    <SketchyContainer component={ButtonBase} disableRipple={true} onClick={onClick} sx={{ width: containerSize, height: containerSize }}>
      <StyledCardContent>
        <Box
          component="img"
          src={image}
          alt={categoryName}
          sx={{ width: imageSize, height: imageSize, objectFit: 'contain' }}
        />
        <Typography variant={textSize} sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
          {categoryName}
        </Typography>
      </StyledCardContent>
    </SketchyContainer>
  );
};

export default SketchyCard;
