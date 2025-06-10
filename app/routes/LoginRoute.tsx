import React from 'react';
import {Box, Typography, Divider} from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyFilter from '../components/ui/SketchyFilter';
import Logo from '../assets/logo.svg';
import GoogleIcon from '../assets/google-icon.svg';

const LoginPage = () => {
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
                sx={{width: 150, height: 150, marginBottom: '2rem'}}
            />

            <Box sx={{width: '100%', maxWidth: '400px'}}>
                <SketchyTextField
                    fullWidth
                    placeholder="MahdiHaeri"
                    variant="outlined"
                    sx={{marginBottom: '1.5rem'}}
                />
                <SketchyTextField
                    fullWidth
                    placeholder="••••••••"
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
                    LOGIN
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
                    backgroundColor: 'white'
                }}
            >
                Log in with Google
            </SketchyButton>

            <Typography>
                Don't have an account? <a href="#" style={{color: '#3d84f5', fontWeight: 'bold'}}>Sign up</a>
            </Typography>
        </Box>
    );
};

export default LoginPage;