// Sample product data for the e-commerce store
export const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    category: "Electronics",
    inStock: true
  },
  {
    id: 2,
    name: "Smartphone Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=400&fit=crop",
    description: "Durable protective case for smartphones with shock absorption technology.",
    category: "Accessories",
    inStock: true
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Spacious laptop backpack with multiple compartments and water-resistant material.",
    category: "Bags",
    inStock: true
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Ergonomic wireless mouse with precision tracking and long battery life.",
    category: "Electronics",
    inStock: false
  },
  {
    id: 5,
    name: "USB-C Cable",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    description: "High-speed USB-C charging cable with durable braided design.",
    category: "Accessories",
    inStock: true
  },
  {
    id: 6,
    name: "Portable Speaker",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Compact Bluetooth speaker with powerful sound and waterproof design.",
    category: "Electronics",
    inStock: true
  },
  {
    id: 7,
    name: "Desk Organizer",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    description: "Wooden desk organizer with multiple compartments for office supplies.",
    category: "Office",
    inStock: true
  },
  {
    id: 8,
    name: "Water Bottle",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    description: "Stainless steel water bottle with insulation to keep drinks hot or cold.",
    category: "Lifestyle",
    inStock: true
  }
];

// Function to get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Function to get products by category
export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

// Function to get all categories
export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

