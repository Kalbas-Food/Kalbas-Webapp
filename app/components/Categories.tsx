import React, { useRef, useState, useEffect } from 'react';
import SketchyIconButton from './ui/SketchyIconButton';
import CategoryCard from './ui/CategoryCard';

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

const Categories: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        handleScroll();
        const currentRef = scrollContainerRef.current;
        currentRef?.addEventListener('scroll', handleScroll);
        return () => {
            currentRef?.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative">
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide"
                onScroll={handleScroll}
            >
                {categories.map((category) => (
                    <div key={category.id} className="flex-shrink-0">
                        <CategoryCard
                            image={category.image}
                            categoryName={category.name}
                        />
                    </div>
                ))}
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full pointer-events-none px-4">
                {canScrollLeft && (
                    <SketchyIconButton
                        onClick={scrollLeft}
                        className="shadow-md pointer-events-auto"
                    >
                        {'<'}
                    </SketchyIconButton>
                )}
                <div />
                {canScrollRight && (
                    <SketchyIconButton
                        onClick={scrollRight}
                        className="shadow-md pointer-events-auto"
                    >
                        {'>'}
                    </SketchyIconButton>
                )}
            </div>
        </div>
    );
};

export default Categories;
