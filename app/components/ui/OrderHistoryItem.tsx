import React from 'react';
import { Box, Typography, Chip, Divider, styled, Button } from '@mui/material';
import dishIcon from '../../assets/img/icons/dish.png';

interface OrderHistoryItemProps {
  restaurant: string;
  date: string;
  total: string;
  status: string;
  logoUrl?: string;
}

const Row = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: `${theme.spacing(2)} 0`,
  minHeight: 64,
}));

const RestaurantLogo = styled(Box)(({ theme }) => ({
  width: 48,
  height: 48,
  borderRadius: '12px',
  background: '#fff',
  border: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  flexShrink: 0,
}));

const ReviewChip = styled(Chip)(({ theme }) => ({
  background: '#e6fbe6',
  color: '#1a7f37',
  fontWeight: 500,
  fontSize: 15,
  borderRadius: 8,
  height: 32,
  marginBottom: theme.spacing(1),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 10,
  background: '#f7f7f7',
  color: '#222',
  fontWeight: 500,
  fontSize: 15,
  boxShadow: 'none',
  border: 'none',
  padding: theme.spacing(1.1, 2.5),
  minWidth: 0,
  '&:hover': {
    background: '#ececec',
    boxShadow: 'none',
  },
}));

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ restaurant, date, total, status, logoUrl }) => {
  return (
    <>
      <Row>
        {/* Restaurant logo on the right */}
        <RestaurantLogo>
          <Box
            component="img"
            src={logoUrl || dishIcon}
            alt="Restaurant"
            sx={{ width: 38, height: 38, objectFit: 'contain' }}
          />
        </RestaurantLogo>
        {/* Info */}
        <Box sx={{ flex: 1, minWidth: 0, mr: 2 }}>
          <Typography variant="subtitle1" sx={{ fontFamily: 'inherit', fontWeight: 700, mb: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{restaurant}</Typography>
          <Typography variant="body2" sx={{ fontFamily: 'inherit', color: 'text.secondary', fontWeight: 400 }}>{date}</Typography>
        </Box>
      </Row>
      {/* Review chip and actions */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <ReviewChip label="Leave a Review" clickable />
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'inherit' }}>
          Share your feedback about this order.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
        <ActionButton startIcon={<span style={{ fontSize: 18 }}>🧾</span>}>
          View Invoice
        </ActionButton>
        <ActionButton startIcon={<span style={{ fontSize: 18 }}>↻</span>}>
          Reorder
        </ActionButton>
      </Box>
      <Divider sx={{ my: 2, borderColor: '#eee' }} />
    </>
  );
};

export default OrderHistoryItem; 