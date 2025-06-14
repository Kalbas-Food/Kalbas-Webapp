import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router';
import SketchyContainer from './SketchyContainer';

interface SketchyRestaurantCardProps {
  id: string;
  name: string;
  score: number;
  reviewCount: number;
  deliveryCost: number;
  bannerImage: string;
  logoImage: string;
}

// No longer directly styled, will use SketchyContainer
// const StyledCard = styled(Box)(({ theme }) => ({ /* ... */ }));

const SketchyRestaurantCard: React.FC<SketchyRestaurantCardProps> = ({ id, name, score, reviewCount, deliveryCost, bannerImage, logoImage }) => {
  return (
    <Link to={`/restaurants/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <SketchyContainer
        disableActiveTransform={true}
        sx={{
          width: '300px',
          minHeight: '280px',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
        }}
      >
        {/* Banner Image */}
        <Box
          component="img"
          src={bannerImage}
          alt="Restaurant Banner"
          sx={{
            width: '100%',
            height: '120px',
            objectFit: 'cover',
            borderRadius: '12px 12px 0 0',
          }}
        />

        {/* Restaurant Logo Container (positioned over banner) */}
        <Box
          sx={{
            position: 'absolute',
            top: '80px',
            left: '10px',
            // transform: 'translateY(-50%)',
            zIndex: 1,
            width: 80,
            height: 80,
            borderRadius: '12px',
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            overflow: 'hidden',

            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              zIndex: -1,
              borderRadius: '12px',
              border: '2px solid black',
              backgroundColor: 'white',
              filter: 'url(#sketchy-filter)',
              boxShadow: '2px 2px 0px black',
            },
          }}
        >
          <Box
            component="img"
            padding={'12px'}
            src={logoImage}
            alt="Restaurant Logo"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '12px',
            }}
          />
        </Box>

        {/* Content Area */}
        <Box sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 'bold', mt: '2rem' }}>
            {name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: '0.5rem' }}>
            <Typography variant="body2" sx={{ fontFamily: 'inherit', color: '#ffc107' }}>
              ★ {score.toFixed(1)}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'inherit', ml: '0.5rem', color: 'grey.600' }}>
              ({reviewCount} reviews)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mt: '1rem' }}>
            <Typography variant="body1" sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>
              Delivery: {deliveryCost === 0 ? 'Free' : `$${deliveryCost.toFixed(2)}`}
            </Typography>
          </Box>
        </Box>
      </SketchyContainer>
    </Link>
  );
};

export default SketchyRestaurantCard;