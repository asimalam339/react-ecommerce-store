import React from 'react';
import ProductList from '../product/ProductList';
import { products } from '../../data/products';
import { useCart } from '../../context/CartContext';

/**
 * Products page component that displays all products
 */
const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
};

export default Products;

