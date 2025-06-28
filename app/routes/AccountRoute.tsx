import React, { useState } from 'react';
import { Box, Typography, Divider, Tabs, Tab, CircularProgress } from '@mui/material';
import SketchyAvatar from '../components/ui/SketchyAvatar';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyButton from '../components/ui/SketchyButton';
import { styled } from '@mui/material/styles';

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
          <Box className="flex flex-col items-center py-10 bg-transparent">
            <img src="/assets/img/empty-box.png" alt="No orders" className="w-32 h-32 mb-4" />
            <Typography variant="h6" className="mb-2">No orders yet</Typography>
            <Typography variant="body2" className="mb-4">Browse our menu and place your first order today!</Typography>
            <SketchyButton variant="outlined">Browse Menu</SketchyButton>
          </Box>
        )}
        {tab === 1 && (
          <Box className="flex flex-col items-center py-10 bg-transparent">
            <Typography variant="h6" className="mb-2">No transactions yet</Typography>
            <Typography variant="body2">Your transactions will appear here.</Typography>
          </Box>
        )}
        {tab === 2 && (
          <Box className="flex flex-col items-center py-10 bg-transparent">
            <Typography variant="h6" className="mb-2">No discounts yet</Typography>
            <Typography variant="body2">Your discount codes will appear here.</Typography>
          </Box>
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