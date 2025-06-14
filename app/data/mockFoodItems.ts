export interface FoodItem {
  id: string;
  image: string;
  name: string;
  details: string;
  price: number;
  restaurantId: string;
}

export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    image: '/app/assets/img/pizza.jpg',
    name: 'Classic Cheeseburger',
    details: 'Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our special sauce',
    price: 12.99,
    restaurantId: '1'
  },
  {
    id: '2',
    image: '/app/assets/img/pizza.jpg',
    name: 'Margherita Pizza',
    details: 'Traditional pizza with fresh mozzarella, tomatoes, and basil on our signature crust',
    price: 14.99,
    restaurantId: '1'
  },
  {
    id: '3',
    image: '/app/assets/img/pizza.jpg',
    name: 'Caesar Salad',
    details: 'Crisp romaine lettuce, parmesan cheese, croutons, and our homemade Caesar dressing',
    price: 8.99,
    restaurantId: '1'
  },
  {
    id: '4',
    image: '/app/assets/img/pizza.jpg',
    name: 'Spaghetti Carbonara',
    details: 'Classic Italian pasta with creamy sauce, pancetta, and parmesan cheese',
    price: 13.99,
    restaurantId: '1'
  },
  {
    id: '5',
    image: '/app/assets/img/pizza.jpg',
    name: 'California Roll',
    details: 'Fresh crab, avocado, and cucumber wrapped in sushi rice and nori',
    price: 9.99,
    restaurantId: '2'
  },
  {
    id: '6',
    image: '/app/assets/img/pizza.jpg',
    name: 'Tonkotsu Ramen',
    details: 'Rich pork broth ramen with chashu, soft-boiled egg, and fresh vegetables',
    price: 11.99,
    restaurantId: '2'
  }
]; 