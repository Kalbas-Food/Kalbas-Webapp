import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import {Outlet} from "react-router";
import SketchyFoodCard from "~/components/ui/SketchyFoodCard";
import {Grid, Container, Typography, Box} from "@mui/material";
import {mockFoodItems} from "~/data/mockFoodItems";

// Define category data structure
interface Category {
    id: string;
    name: string;
    image: string;
}

interface Restaurant {
    id: string;
    name: string;
    score: number;
    reviewCount: number;
    deliveryCost: number;
    bannerImage: string;
    logoImage: string;
}

const RestaurantRoute: React.FC = () => {
    const handleAddToCart = (foodId: string) => {
        // TODO: Implement add to cart functionality
        console.log('Adding to cart:', foodId);
    };

    return (
        <>
            <Container maxWidth="lg" sx={{ 
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
                <Box sx={{ 
                    mb: 4,
                    textAlign: 'center',
                    maxWidth: '800px',
                    mx: 'auto'
                }}>
                    <Typography variant="h4" component="h1" sx={{ 
                        fontFamily: 'inherit',
                        fontWeight: 'bold',
                        mb: 2
                    }}>
                        Our Menu
                    </Typography>
                    <Typography variant="body1" sx={{ 
                        color: 'text.secondary',
                        mb: 4
                    }}>
                        Discover our delicious selection of dishes
                    </Typography>
                </Box>
                
                <Box sx={{ 
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Grid container spacing={3} sx={{ maxWidth: '1200px' }} justifyContent="center">
                        {mockFoodItems.map((foodItem) => (
                            <Box
                                key={foodItem.id}
                                sx={{
                                    width: { xs: '100%', sm: '50%', md: '33.33%' },
                                    height: '440px',
                                    p: 1,
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                }}
                            >
                                <Box sx={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}>
                                    <SketchyFoodCard
                                        image={foodItem.image}
                                        name={foodItem.name}
                                        details={foodItem.details}
                                        price={foodItem.price}
                                        onAddToCart={() => handleAddToCart(foodItem.id)}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default RestaurantRoute;