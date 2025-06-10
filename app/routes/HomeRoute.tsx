import React from 'react';
import {Box, Typography, Divider} from '@mui/material';
import SketchyButton from '../components/ui/SketchyButton';
import SketchyTextField from '../components/ui/SketchyTextField';
import SketchyFilter from '../components/ui/SketchyFilter';
import Logo from '../assets/logo.svg';
import GoogleIcon from '../assets/google-icon.svg';

const HomeRoute: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to Kalbas</h1>
            <p className="text-lg">Your personal task management solution</p>
        </div>
    );
};

export default HomeRoute;