import React from 'react';
import {Box, Typography, Divider} from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyFilter from '../components/ui/SketchyFilter';
import Logo from '../assets/svg/logo.svg';
import GoogleIcon from '../assets/svg/google-icon.svg';
import { Link } from 'react-router';

const SignUpRoute: React.FC = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '2rem',
            }}
        >
            <SketchyFilter/>
            <Box
                component="img"
                src={Logo}
                alt="Logo"
                sx={{width: 100, height: 100, marginBottom: '2rem'}}
            />

            <Box sx={{width: '100%', maxWidth: '400px'}}>
                <SketchyTextField
                    fullWidth
                    placeholder="Full Name"
                    variant="outlined"
                    sx={{marginBottom: '1.5rem'}}
                />
                <SketchyTextField
                    fullWidth
                    placeholder="Email Address"
                    type="email"
                    variant="outlined"
                    sx={{marginBottom: '1.5rem'}}
                />
                <SketchyTextField
                    fullWidth
                    placeholder="Password"
                    type="password"
                    variant="outlined"
                    sx={{marginBottom: '1.5rem'}}
                />
                <SketchyTextField
                    fullWidth
                    placeholder="Confirm Password"
                    type="password"
                    variant="outlined"
                    sx={{marginBottom: '1.5rem'}}
                />
                <SketchyButton
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{padding: '0.8rem', fontSize: '1.5rem', marginBottom: '1.5rem'}}
                >
                    SIGN UP
                </SketchyButton>
            </Box>

            <Divider sx={{width: '100%', maxWidth: '400px', marginBottom: '1.5rem'}}>
                <Typography>OR</Typography>
            </Divider>

            <SketchyButton
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<img src={GoogleIcon} alt="Google icon" style={{width: 24, height: 24}}/>}
                sx={{
                    padding: '0.8rem',
                    fontSize: '1.2rem',
                    marginBottom: '2rem',
                    maxWidth: '400px',
                }}
            >
                Sign up with Google
            </SketchyButton>

            <Typography>
                Already have an account?{' '}
                <Link to="/auth/login" style={{color: '#3d84f5', fontWeight: 'bold'}}>Log in</Link>
            </Typography>
        </Box>
    );
};

export default SignUpRoute;