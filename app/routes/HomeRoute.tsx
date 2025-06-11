import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import SketchyCard from '../components/ui/SketchyCard';

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

const HomeRoute: React.FC = () => {
    return (
        <div>
            <SketchyFilter />
            <Header />
            <div className="container mx-auto px-4 py-8">
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories.map((category) => (
                        <SketchyCard
                            key={category.id}
                            image={category.image}
                            categoryName={category.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeRoute;