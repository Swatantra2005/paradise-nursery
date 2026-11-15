import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <main className="content-wrap">
        <div className="section-heading">
          <p className="eyebrow">YOUR SELECTION</p>
          <h1>Shopping cart</h1>
        </div>
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is ready to grow.</h2>
          <p>You haven't added any plants yet. Find a green companion for your space.</p>
          <button className="secondary-button" onClick={onContinueShopping}>Explore plants</button>
        </section>
      </main>
    );
  }

  return (
    <main className="content-wrap">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE MORE GREEN</p>
        <h1>Your shopping cart</h1>
        <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} selected for your home.</p>
      </div>
      <div className="cart-layout">
        <section className="cart-list" aria-label="Cart items">
          {items.map((item) => (
            <article className="cart-row" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <small>${item.price.toFixed(2)} each</small>
                <div className="quantity-control" aria-label={`Quantity for ${item.name}`}>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))} aria-label="Decrease quantity">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))} aria-label="Increase quantity">+</button>
                </div>
              </div>
              <div className="cart-line-total">
                ${(item.price * item.quantity).toFixed(2)}
                <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Remove</button>
              </div>
            </article>
          ))}
        </section>
        <aside className="summary-card">
          <h2>Order summary</h2>
          <div className="summary-line"><span>Items</span><span>{totalItems}</span></div>
          <div className="summary-line"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
          <div className="summary-line"><span>Delivery</span><span>Free</span></div>
          <div className="summary-line total"><span>Total</span><span>${subtotal.toFixed(2)}</span></div>
          <button className="primary-button" style={{ width: '100%' }} onClick={() => window.alert('Thank you! Checkout is a demo for this learning project.')}>Continue to checkout</button>
          <button className="remove-button" onClick={onContinueShopping}>Continue shopping</button>
        </aside>
      </div>
    </main>
  );
}