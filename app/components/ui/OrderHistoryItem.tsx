import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import dishIcon from '../../assets/img/icons/dish.png';
import SketchyButton from './SketchyButton';

interface OrderHistoryItemProps {
  restaurant: string;
  date: string;
  total: string;
  status: string;
  logoUrl?: string;
}

const OrderHistoryItem: React.FC<OrderHistoryItemProps> = ({ restaurant, date, total, status, logoUrl }) => {
  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          component="img"
          src={logoUrl || dishIcon}
          alt="Restaurant"
          sx={{ width: 48, height: 48, objectFit: 'contain', mr: 2 }}
        />
        <Box>
          <Typography variant="h6" sx={{ fontFamily: 'inherit', fontWeight: 'bold' }}>{restaurant}</Typography>
          <Typography variant="body2" sx={{ fontFamily: 'inherit', color: 'text.secondary' }}>{date}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="body2" sx={{ fontFamily: 'inherit' }}>Total: {total}</Typography>
        <Typography variant="body2" sx={{ fontFamily: 'inherit', color: status === 'Delivered' ? 'success.main' : 'warning.main' }}>{status}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
        <Button variant="text" sx={{ fontFamily: 'inherit' }}>Leave a Review</Button>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="text" sx={{ fontFamily: 'inherit' }}>View Invoice</Button>
          <SketchyButton>Reorder</SketchyButton>
        </Box>
      </Box>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default OrderHistoryItem;
