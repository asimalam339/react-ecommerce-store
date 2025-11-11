import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { getCategories } from '../../data/products';

/**
 * ProductList component to display a grid of products with filtering
 * Props:
 * - products: array of product objects
 * - onAddToCart: function to handle adding products to cart
 */
const ProductList = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...getCategories()];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of quality products at great prices. 
          From electronics to lifestyle accessories, we have everything you need.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}

      {/* Product Count */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>
      </div>
    </div>
  );
};

export default ProductList;

