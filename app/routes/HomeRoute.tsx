import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import SketchyCard from '../components/ui/SketchyCard';
import SketchyRestaurantCard from '../components/ui/SketchyRestaurantCard';

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
];

const HomeRoute: React.FC = () => {
    return (
        <div>
            <SketchyFilter />
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Explore Categories</h2>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories.map((category) => (
                        <SketchyCard
                            key={category.id}
                            image={category.image}
                            categoryName={category.name}
                        />
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-12">Popular Restaurants</h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {restaurants.map((restaurant) => (
                        <SketchyRestaurantCard
                            key={restaurant.id}
                            id={restaurant.id}
                            name={restaurant.name}
                            score={restaurant.score}
                            reviewCount={restaurant.reviewCount}
                            deliveryCost={restaurant.deliveryCost}
                            bannerImage={restaurant.bannerImage}
                            logoImage={restaurant.logoImage}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeRoute;