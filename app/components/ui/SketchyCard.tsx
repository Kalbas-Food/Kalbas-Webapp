import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SketchyCardProps {
  image: string;
  categoryName: string;
  onClick?: () => void;
}

const StyledCard = styled(ButtonBase)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  borderRadius: '12px',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: 'transparent',
  border: 'none',
  boxShadow: 'none',
  transition: 'transform 0.1s ease-in-out',
  zIndex: 0,
  width: '150px', // Fixed width for demonstration
  height: '150px', // Fixed height for demonstration

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    borderRadius: '12px',
    border: '2px solid black',
    backgroundColor: 'white',
    filter: 'url(#sketchy-filter)',
    boxShadow: '4px 4px 0px black',
    transition: 'transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out',
  },

  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&::before': {
      boxShadow: '6px 6px 0px black',
      transform: 'translateY(-2px)',
    },
  },
  '&:active': {
    transform: 'translate(2px, 2px)',
    '&::before': {
      boxShadow: '2px 2px 0px black',
    },
  },
}));

const SketchyCard: React.FC<SketchyCardProps> = ({ image, categoryName, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <Box
        component="img"
        src={image}
        alt={categoryName}
        sx={{ width: 80, height: 80, objectFit: 'contain' }}
      />
      <Typography variant="body1" sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
        {categoryName}
      </Typography>
    </StyledCard>
  );
};

export default SketchyCard; 