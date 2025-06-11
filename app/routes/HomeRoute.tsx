import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import SketchyCard from '../components/ui/SketchyCard';

import drinksImage from '../assets/drinks.png';
import pizzaImage from '../assets/pizza.png';
import burgerImage from '../assets/burger.png';
import foodImage from '../assets/food.png';
import saladsImage from '../assets/salads.png';

const HomeRoute: React.FC = () => {
    return (
        <div>
            <SketchyFilter />
            <Header />
            <div className="container mx-auto px-4 py-8">

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <SketchyCard image={drinksImage} categoryName="Drinks" />
                    <SketchyCard image={pizzaImage} categoryName="Pizza" />
                    <SketchyCard image={burgerImage} categoryName="Burgers" />
                    <SketchyCard image={foodImage} categoryName="Desserts" />
                    <SketchyCard image={saladsImage} categoryName="Salads" />
                </div>
            </div>
        </div>
    );
};

export default HomeRoute;