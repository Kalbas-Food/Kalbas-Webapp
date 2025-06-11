import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';

const HomeRoute: React.FC = () => {
    return (
        <div>
            <SketchyFilter />
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Welcome to Kalbas</h1>
                <p className="text-lg">Your personal task management solution</p>
            </div>
        </div>
    );
};

export default HomeRoute;