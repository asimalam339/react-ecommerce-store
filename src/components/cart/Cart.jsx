import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { useCart } from '../../context/CartContext';

/**
 * Cart component to display and manage cart items
 */
const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useCart();

  // If cart is empty, show empty state
  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center py-12">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/products">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <Button
          onClick={clearCart}
          variant="outline"
          className="text-red-600 border-red-600 hover:bg-red-50"
        >
          Clear Cart
        </Button>
      </div>

      {/* Cart Items */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {cartItems.map((item) => (
          <div key={item.id} className="border-b border-gray-200 last:border-b-0">
            <div className="p-6 flex items-center space-x-4">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80x80?text=Product';
                }}
              />

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.category}</p>
                <p className="text-blue-600 font-bold text-lg">${item.price.toFixed(2)}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                
                <span className="w-12 text-center font-medium">{item.quantity}</span>
                
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  variant="outline"
                  size="sm"
                  className="h-8 w-8 p-0"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* Item Total */}
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <Button
                onClick={() => removeFromCart(item.id)}
                variant="outline"
                size="sm"
                className="text-red-600 border-red-600 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium text-gray-900">
            Total Items: {getTotalItems()}
          </span>
          <span className="text-2xl font-bold text-gray-900">
            Total: ${getTotalPrice().toFixed(2)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/products" className="flex-1">
            <Button variant="outline" className="w-full">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/checkout" className="flex-1">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;

