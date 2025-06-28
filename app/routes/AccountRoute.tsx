import React, { useState } from 'react';
import { Box, Typography, Divider, Tabs, Tab, CircularProgress } from '@mui/material';
import SketchyAvatar from '../components/ui/SketchyAvatar';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyButton from '../components/ui/SketchyButton';
import { styled } from '@mui/material/styles';
import BoxImage from '../assets/img/icons/box.png';

// Mock user data for demo
const mockUser = {
  firstName: 'Olivia',
  lastName: 'Bennett',
  username: 'oliviab',
  phone: '+1 555-123-4567',
  email: 'olivia.bennett@email.com',
  avatar: undefined,
  memberSince: '2021',
};

// Custom styled text field to always show label above
const StyledTextField = styled(SketchyTextField)({
  '& label': {
    position: 'static',
    transform: 'none',
    fontWeight: 500,
    marginBottom: 4,
    color: 'rgba(0,0,0,0.8)',
    fontSize: '1rem',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'none',
  },
  '& .MuiOutlinedInput-root': {
    marginTop: 0,
  },
});

const EmptyState = ({ title, description, actionLabel, onAction }: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) => (
  <Box className="flex flex-col items-center justify-center py-12 px-4 bg-transparent">
    <img
      src={BoxImage}
      alt="Empty state"
      className="w-32 h-32 mb-4 drop-shadow-md"
      style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))' }}
    />
    <Typography variant="h6" className="mb-1 font-semibold text-gray-700 text-center">
      {title}
    </Typography>
    <Typography variant="body2" className="mb-4 text-gray-500 text-center" style={{ maxWidth: 320 }}>
      {description}
    </Typography>
    {actionLabel && onAction && (
      <SketchyButton variant="outlined" onClick={onAction}>
        {actionLabel}
      </SketchyButton>
    )}
  </Box>
);

function AccountRoute() {
  const [tab, setTab] = useState(0);
  const [form, setForm] = useState({
    firstName: mockUser.firstName,
    lastName: mockUser.lastName,
    phone: mockUser.phone,
    email: mockUser.email,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsEditing(true);
  }

  function handleTabChange(_e: React.SyntheticEvent, newValue: number) {
    setTab(newValue);
  }

  function handleSave() {
    setIsLoading(true);
    setTimeout(() => {
      setIsEditing(false);
      setIsLoading(false);
    }, 1000);
  }

  function handleCancel() {
    setForm({
      firstName: mockUser.firstName,
      lastName: mockUser.lastName,
      phone: mockUser.phone,
      email: mockUser.email,
    });
    setIsEditing(false);
  }

  function handleLogout() {
    // TODO: Implement logout
  }

  function handleBrowseMenu() {
    // TODO: Implement navigation to menu
  }

  return (
    <Box className="max-w-2xl mx-auto py-10 px-4 md:px-8">
      <Typography variant="h4" className="font-bold mb-6">Account</Typography>
      <Box className="flex items-center gap-4 mb-8">
        <SketchyAvatar src={mockUser.avatar} alt={mockUser.username} size={70} />
        <Box>
          <Typography variant="h6" className="font-bold">{mockUser.firstName} {mockUser.lastName}</Typography>
          <Typography variant="body2" className="text-gray-500">Member since {mockUser.memberSince}</Typography>
        </Box>
      </Box>
      <Typography variant="h6" className="mb-2">Personal Information</Typography>
      <Box className="grid grid-cols-1 gap-4 mb-4">
        <StyledTextField
          label="First Name"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <StyledTextField
          label="Last Name"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <StyledTextField
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <StyledTextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <Box className="flex gap-2 mb-8">
        <SketchyButton
          variant="contained"
          color="primary"
          disableRipple
          disabled={!isEditing || isLoading}
          onClick={handleSave}
        >
          {isLoading ? <CircularProgress size={20} /> : 'Save Changes'}
        </SketchyButton>
        <SketchyButton
          variant="outlined"
          color="secondary"
          disableRipple
          disabled={!isEditing || isLoading}
          onClick={handleCancel}
        >
          Cancel
        </SketchyButton>
      </Box>
      <Typography variant="h6" className="mb-2 mt-8">Account Management</Typography>
      <Tabs value={tab} onChange={handleTabChange} className="mb-6" TabIndicatorProps={{style: {height: 2}}} TabScrollButtonProps={{disableRipple: true}}>
        <Tab label="My Orders" disableRipple />
        <Tab label="Transactions" disableRipple />
        <Tab label="Discounts" disableRipple />
      </Tabs>
      <Box>
        {tab === 0 && (
          <EmptyState
            title="No orders yet"
            description="You haven't placed any orders yet. Browse our menu and place your first order today!"
          />
        )}
        {tab === 1 && (
          <EmptyState
            title="No transactions yet"
            description="You have no transactions yet. Your transactions will appear here after your first order."
          />
        )}
        {tab === 2 && (
          <EmptyState
            title="No discounts yet"
            description="You don't have any discount codes yet. Check back here after you receive a discount!"
          />
        )}
      </Box>
      <Box className="flex justify-start mt-10">
        <SketchyButton variant="outlined" color="error" onClick={handleLogout} disabled={isLoading}>
          Log Out
        </SketchyButton>
      </Box>
    </Box>
  );
}

export default AccountRoute;