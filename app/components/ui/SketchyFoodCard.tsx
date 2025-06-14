import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import SketchyButton from './SketchyButton';
import addToCartIcon from '../../assets/img/icons/cart.png';

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: '12px',
    filter: 'url(#sketchy-filter)',
    pointerEvents: 'none',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 4px 8px ${theme.palette.text.primary}40`,
  },
}));

const FoodImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '200px',
  borderRadius: '8px',
  overflow: 'hidden',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: '8px',
    filter: 'url(#sketchy-filter)',
    pointerEvents: 'none',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const FoodInfo = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const PriceSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
  paddingTop: '1rem',
  borderTop: `1px solid ${theme.palette.text.primary}`,
}));

interface SketchyFoodCardProps {
  image: string;
  name: string;
  details: string;
  price: number;
  onAddToCart: () => void;
}

const SketchyFoodCard: React.FC<SketchyFoodCardProps> = ({
  image,
  name,
  details,
  price,
  onAddToCart,
}) => {
  const theme = useTheme();

  return (
    <CardContainer>
      <FoodImage>
        <img src={image} alt={name} />
      </FoodImage>
      <FoodInfo>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Indie Flower", cursive',
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: '"Indie Flower", cursive',
            color: theme.palette.text.secondary,
            minHeight: '3em',
          }}
        >
          {details}
        </Typography>
      </FoodInfo>
      <PriceSection>
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Indie Flower", cursive',
            fontWeight: 'bold',
            color: theme.palette.text.primary,
          }}
        >
          ${price.toFixed(2)}
        </Typography>
        <SketchyButton
          onClick={onAddToCart}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            px: 2,
            py: 1,
          }}
        >
          <Box
            component="img"
            src={addToCartIcon}
            alt="Add to Cart"
            sx={{ width: 24, height: 24 }}
          />
          <Typography
            sx={{
              fontFamily: '"Indie Flower", cursive',
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            Add to Cart
          </Typography>
        </SketchyButton>
      </PriceSection>
    </CardContainer>
  );
};

export default SketchyFoodCard; 