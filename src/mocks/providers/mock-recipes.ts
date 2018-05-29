import { Recipe } from '../../models/recipe';

export const RECIPES: Recipe[] = [
{ 
    id: "hot-coffee", 
    recipeName: 'Hot Coffee', 
    thumbnailImageUrl: 'assets/imgs/hotcofee.jpg', 
    largeImageUrl: 'assets/imgs/hotcofee.jpg', 
    totalTimeInSeconds: 1800,
    rating: 4.44,
    numberOfServings: 6,
    ingredients: [
          "garlic cloves",
          "ground pepper",
          "diced tomatoes",
          "celery",
          "tomato juice",
          "salt",
          "cabbage",
          "bell peppers",
          "oregano",
          "carrots",
          "basil",
          "vegetable broth",
          "chili pepper flakes",
          "green beans",
          "onions",
          "onion soup mix"
      ]
  },
  { 
    id: "bbq-delight", 
    recipeName: 'BBQ Delight', 
    thumbnailImageUrl: 'assets/imgs/bbq-delight.jpg',
    largeImageUrl: 'assets/imgs/bbq-delight.jpg',  
    totalTimeInSeconds: 900,
    rating: 4,
    numberOfServings: 8,
    ingredients: [
          "lime juice",
          "pepper",
          "vegetable bouillon",
          "sesame oil",
          "salt",
          "carrots",
          "yellow onions",
          "red pepper",
          "garlic",
          "fish",
          "baby corn"
      ]
  },
  { 
    id: "ice-cream", 
    recipeName: 'Ice Cream', 
    thumbnailImageUrl: 'assets/imgs/icecream.jpg', 
    largeImageUrl: 'assets/imgs/icecream.jpg', 
    totalTimeInSeconds: 3600,
    rating: 4.2,
    numberOfServings: 3,
    ingredients: [
          "chili powder",
          "chopped celery",
          "long grain rice",
          "kidney beans",
          "shredded cabbage",
          "red pepper",
          "carrot",
          "onion",
          "minced garlic"
      ]
  },
  { 
    id: "russian-salad", 
    recipeName: 'Russian Salad', 
    thumbnailImageUrl: 'assets/imgs/nonvegsalad.jpg', 
    largeImageUrl: 'assets/imgs/nonvegsalad.jpg', 
    totalTimeInSeconds: 1800,
    rating: 5,
    numberOfServings: 7,
    ingredients: [
          "carrots",
          "cauliflower",
          "water",
          "onions",
          "garlic cloves",
          "pepper",
          "potatoes",
          "brussels sprouts",
          "salt"
      ] 
  },
  { 
    id: "sweet-bites", 
    recipeName: 'Sweet Bites', 
    thumbnailImageUrl: 'assets/imgs/pizza-capricciosa.jpg', 
    largeImageUrl: 'assets/imgs/pizza-capricciosa.jpg', 
    totalTimeInSeconds: 900,
    rating: 4.9,
    numberOfServings: 1,
    ingredients: [
          "salt",
          "onions",
          "broccoli",
          "celery",
          "carrots",
          "lentils",
          "green pepper",
          "tomato juice",
          "tomato puree"
      ]  
  },
  { 
    id: "spicy-pizza", 
    recipeName: 'Spicy Pizza', 
    thumbnailImageUrl: 'assets/imgs/pizza-capricciosa.jpg',
    largeImageUrl: 'assets/imgs/pizza-capricciosa.jpg', 
    totalTimeInSeconds: 1800,
    rating: 4.5,
    numberOfServings: 5,
    ingredients: [
          "tomato paste",
          "water",
          "celery",
          "corn",
          "shredded cabbage",
          "green beans",
          "pepper"
      ]   
  },
  { 
    id: "fast-food", 
    recipeName: 'Fast Food', 
    thumbnailImageUrl: 'assets/imgs/fastfood.jpg', 
    largeImageUrl: 'assets/imgs/fastfood.jpg', 
    totalTimeInSeconds: 900,
    rating: 4.7,
    numberOfServings: 2,
    ingredients: [
          "bay leaves",
          "white onion",
          "tofu",
          "peppercorns",
          "diced tomatoes",
          "cabbage",
          "red wine"
    ]
  }
];