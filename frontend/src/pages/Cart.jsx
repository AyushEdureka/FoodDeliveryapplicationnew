import React, { useContext } from 'react';
import { Table, Button } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY); 

const Cart = () => {
  const {
    cartItems,
    setCartItems,
    removeFromCart,
    increaseQty,
    DecreaseQty,
    totalPrice,
    clearCart,
  } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          user: { email: 'demo@user.com' }, // Replace with actual user if logged in
        }),
      });

      const data = await res.json();

      if (!data.id) {
        throw new Error('Stripe session ID not returned');
      }

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      console.error('Checkout Error:', err);
      alert('Checkout failed. Please try again.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <h4>Your cart is empty.</h4>
        </div>
      ) : (
        <>
          <Table bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Food</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="80"
                      height="60"
                      style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => DecreaseQty(item._id)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => increaseQty(item._id)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h4>Total: ₹{totalPrice}</h4>
            <div>
              <Button variant="outline-danger" onClick={clearCart} className="me-3">
                Clear Cart
              </Button>
              <Button variant="success" onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
