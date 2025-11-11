import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Cart from './components/cart/Cart';
import Checkout from './components/cart/Checkout';
import './App.css';

/**
 * AppContent component that uses the cart context
 * This is separated so we can use the useCart hook inside the CartProvider
 */
const AppContent = () => {
  const { getTotalItems } = useCart();

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Header with cart items count */}
        <Header cartItemsCount={getTotalItems()} />
        
        {/* Main content area */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

/**
 * Simple 404 Not Found component
 */
const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a 
        href="/" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Go Home
      </a>
    </div>
  );
};

/**
 * Main App component
 * Wraps the entire application with the CartProvider for global state management
 */
function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;

