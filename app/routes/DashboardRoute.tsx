import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import SketchyCard from '../components/ui/SketchyCard';
import SketchyRestaurantCard from '../components/ui/SketchyRestaurantCard';
import { Box } from '@mui/material';

// Import category images
import iranianImage from '../assets/img/categories/iranian-food.png';
import fastFoodImage from '../assets/img/categories/fast-food.png';
import kebabImage from '../assets/img/categories/kebab.png';
import pizzaImage from '../assets/img/categories/pizza.png';
import burgerImage from '../assets/img/categories/burger.png';
import sandwichImage from '../assets/img/categories/sandwich.png';
import friedChickenImage from '../assets/img/categories/fried-chicken.png';
import pastaImage from '../assets/img/categories/pasta.png';
import seafoodImage from '../assets/img/categories/seafood.png';

// Import restaurant images
import restaurantBanner from '../assets/img/restaurant-banner.webp';
import dishLogo from '../assets/img/icons/dish.png';
import {Outlet, useLocation} from "react-router";
import Footer from "~/components/ui/Footer";

// Define category data structure
interface Category {
    id: string;
    name: string;
    image: string;
}

const categories: Category[] = [
    { id: 'iranian', name: 'Iranian', image: iranianImage },
    { id: 'fast-food', name: 'Fast Food', image: fastFoodImage },
    { id: 'kebab', name: 'Kebab', image: kebabImage },
    { id: 'pizza', name: 'Pizza', image: pizzaImage },
    { id: 'burger', name: 'Burger', image: burgerImage },
    { id: 'sandwich', name: 'Sandwich', image: sandwichImage },
    { id: 'fried-chicken', name: 'Fried Chicken', image: friedChickenImage },
    { id: 'pasta', name: 'Pasta', image: pastaImage },
    { id: 'seafood', name: 'Seafood', image: seafoodImage },
];

interface Restaurant {
    id: string;
    name: string;
    score: number;
    reviewCount: number;
    deliveryCost: number;
    bannerImage: string;
    logoImage: string;
}

const restaurants: Restaurant[] = [
    {
        id: 'pizza-shiela',
        name: 'Pizza Shiela (Valiasr Crossroad)',
        score: 4.8,
        reviewCount: 51775,
        deliveryCost: 15000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'burger-king',
        name: 'Burger King (Tehran Branch)',
        score: 4.5,
        reviewCount: 20000,
        deliveryCost: 0,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'kebab-house',
        name: 'Kebab House (North Kargar)',
        score: 4.9,
        reviewCount: 30000,
        deliveryCost: 5000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'sushi-master',
        name: 'Sushi Master (Vanak)',
        score: 4.7,
        reviewCount: 15800,
        deliveryCost: 20000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'pasta-paradise',
        name: 'Pasta Paradise (Tajrish)',
        score: 4.6,
        reviewCount: 12400,
        deliveryCost: 12000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'chicken-king',
        name: 'Chicken King (Sadeghieh)',
        score: 4.4,
        reviewCount: 28900,
        deliveryCost: 8000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'sandwich-club',
        name: 'Sandwich Club (Ferdowsi)',
        score: 4.3,
        reviewCount: 15600,
        deliveryCost: 6000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'iranian-deli',
        name: 'Iranian Deli (Saadat Abad)',
        score: 4.9,
        reviewCount: 42300,
        deliveryCost: 10000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'seafood-grill',
        name: 'Seafood Grill (Chitgar)',
        score: 4.7,
        reviewCount: 9800,
        deliveryCost: 25000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    },
    {
        id: 'vegan-bites',
        name: 'Vegan Bites (Elahieh)',
        score: 4.8,
        reviewCount: 7600,
        deliveryCost: 15000,
        bannerImage: restaurantBanner,
        logoImage: dishLogo,
    }
];

const DashboardRoute: React.FC = () => {
    return (
        <div>
            <SketchyFilter />
            <Header />
            <div style={{minHeight: '100vh'}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default DashboardRoute;