import React from 'react';
import Header from '../components/Header';
import SketchyFilter from '../components/ui/SketchyFilter';
import {Outlet} from "react-router";
import SketchyFoodCard from "~/components/ui/SketchyFoodCard";
import {Grid, Container, Typography, Box, Button, Avatar, Stack} from "@mui/material";
import {mockFoodItems} from "~/data/mockFoodItems";

// Placeholder restaurant info (replace with real data as needed)
const restaurant = {
    name: 'Sample Restaurant',
    logo: '/app/assets/img/icons/dish.png',
    reviewCount: 1234,
    score: 4.7,
};

const RestaurantInvoice = () => (
    <Box sx={{
        width: {xs: '100%', md: 300},
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        p: 3,
        mb: {xs: 3, md: 0},
        minHeight: 200,
        position: {md: 'sticky'},
        top: {md: 32},
    }}>
        <Typography variant="h6" sx={{fontWeight: 'bold', mb: 2}}>
            Your Invoice
        </Typography>
        <Typography variant="body2" color="text.secondary">
            (Cart items will appear here)
        </Typography>
    </Box>
);

const RestaurantInfo = () => (
    <Box sx={{
        width: {xs: '100%', md: 260},
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        p: 3,
        mb: {xs: 3, md: 0},
        minHeight: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: {xs: 'center', md: 'flex-end'},
        position: {md: 'sticky'},
        top: {md: 32},
    }}>
        <Avatar src={restaurant.logo} alt={restaurant.name} sx={{width: 64, height: 64, mb: 2}}/>
        <Typography variant="h6" sx={{fontWeight: 'bold', mb: 1, textAlign: {xs: 'center', md: 'right'}}}>
            {restaurant.name}
        </Typography>
        <Typography variant="body2" sx={{color: 'text.secondary', textAlign: {xs: 'center', md: 'right'}}}>
            {restaurant.reviewCount} reviews
        </Typography>
        <Typography variant="body2"
                    sx={{color: '#ffc107', fontWeight: 'bold', textAlign: {xs: 'center', md: 'right'}, mb: 1}}>
            ★ {restaurant.score}
        </Typography>
        <Button variant="outlined" size="small" sx={{mt: 2}}>
            More Info
        </Button>
    </Box>
);

const RestaurantRoute: React.FC = () => {
    const handleAddToCart = (foodId: string) => {
        // TODO: Implement add to cart functionality
        console.log('Adding to cart:', foodId);
    };

    return (
        <>
            <Container maxWidth="xl" sx={{py: 4}}>
                <Box
                    sx={{
                        display: {xs: 'block', md: 'flex'},
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {/* Left: Invoice (desktop), bottom on mobile if shown */}
                    <Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        flex: 1,
                        order: {xs: 3, md: 1},
                    }}>
                        <RestaurantInvoice/>
                    </Box>

                    {/* Center: Food Cards */}
                    <Box
                        sx={{
                            display: 'flex',
                            flex: 3,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            order: {xs: 2, md: 2},
                        }}
                    >
                        <Grid container spacing={3} sx={{width: '100%', px: 4}} justifyContent="center">
                            {mockFoodItems.map((foodItem) => (
                                <Grid
                                    key={foodItem.id}
                                    size={{xs: 12, sm: 6, md: 12, lg: 6}}
                                    bgcolor={'red'}
                                    sx={{display: 'flex'}}
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
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Right: Restaurant Info (desktop), top on mobile */}
                    <Box sx={{
                        display: {xs: 'none', md: 'flex'},
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        order: {xs: 1, md: 3},
                    }}>
                        <RestaurantInfo/>
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default RestaurantRoute;