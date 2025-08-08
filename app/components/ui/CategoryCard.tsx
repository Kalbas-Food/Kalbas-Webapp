import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CategoryCardProps {
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
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '8px',
  width: '120px',
  height: '120px',
  color: theme.palette.text.primary,
  transition: 'background-color 0.2s ease',

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CategoryCard: React.FC<CategoryCardProps> = ({ image, categoryName, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <Box
        component="img"
        src={image}
        alt={categoryName}
        sx={{ width: 60, height: 60, objectFit: 'contain' }}
      />
      <Typography variant="body2" sx={{ fontFamily: 'inherit', fontWeight: 'bold', textAlign: 'center' }}>
        {categoryName}
      </Typography>
    </StyledCard>
  );
};

export default CategoryCard;
