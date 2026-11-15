import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

export default function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="content-wrap">
      <div className="section-heading">
        <p className="eyebrow">YOUR SELECTION</p>
        <h1>Shopping Cart</h1>
        <p>{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
      </div>
      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Explore our plants and find a green companion for your home.</p>
          <button className="secondary-button" onClick={onContinueShopping}>Continue Shopping</button>
        </section>
      ) : (
        <>
          <div style={{ marginBottom: 20 }}><button className="secondary-button" onClick={onContinueShopping}>← Continue Shopping</button></div>
          <div className="cart-layout">
            <section className="cart-list" aria-label="Shopping cart items">
              {items.map((item) => (
                <article className="cart-row" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <small>Unit price: ${item.price.toFixed(2)}</small>
                    <div className="quantity-control">
                      <button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
                      <span>{item.quantity}</span>
                      <button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
                    </div>
                  </div>
                  <div className="cart-line-total">
                    ${(item.price * item.quantity).toFixed(2)}
                    <button className="remove-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                  </div>
                </article>
              ))}
            </section>
            <aside className="summary-card">
              <h2>Cart Summary</h2>
              <div className="summary-line"><span>Total items</span><span>{totalItems}</span></div>
              <div className="summary-line total"><span>Total cost</span><span>${totalCost.toFixed(2)}</span></div>
              <button className="primary-button" style={{ width: '100%' }} onClick={() => window.alert('Coming Soon')}>Checkout</button>
              <button className="remove-button" onClick={onContinueShopping}>Continue Shopping</button>
            </aside>
          </div>
          <div style={{ marginTop: 24 }}><button className="secondary-button" onClick={onContinueShopping}>← Continue Shopping</button></div>
        </>
      )}
    </main>
  );
}