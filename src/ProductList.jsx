import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { plantCategories } from './plants';

export default function ProductList({ onOpenCart, onGoHome, onGoAbout }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const quantityInCart = (id) => cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <>
      <header className="site-header product-list-header">
        <button className="brand" onClick={onGoHome} aria-label="Paradise Nursery home">
          <span className="brand-mark">✿</span><span>Paradise <strong>Nursery</strong></span>
        </button>
        <nav className="main-nav" aria-label="Plant shop navigation">
          <button onClick={onGoHome}>Home</button>
          <button className="active" aria-current="page">Plants</button>
          <button onClick={onGoAbout}>About Us</button>
        </nav>
        <button className="cart-nav" onClick={onOpenCart} aria-label={`Shopping cart with ${cartQuantity} items`}>
          <span aria-hidden="true">🛒</span> Cart <span className="cart-count">{cartQuantity}</span>
        </button>
      </header>
      <main className="content-wrap">
        <div className="section-heading">
          <p className="eyebrow">FIND YOUR GREEN COMPANION</p>
          <h1>Plants for every space</h1>
          <p>Choose a little natural beauty for your home or workspace.</p>
          <p className="catalogue-count">
            {plantCategories.length} categories · {plantCategories.reduce((total, group) => total + group.plants.length, 0)} plants
          </p>
        </div>
        {plantCategories.map((group) => (
          <section className="category-block" key={group.category} aria-label={group.category}>
            <h2 className="category-title">{group.category}</h2>
            <div className="product-grid">
              {group.plants.map((plant) => {
                const quantity = quantityInCart(plant.id);
                return (
                  <article className="product-card" key={plant.id}>
                    <img className="product-photo" src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="product-body">
                      <h3>{plant.name}</h3>
                      <p>{plant.description}</p>
                      <div className="product-meta">
                        <span className="price">${plant.price.toFixed(2)}</span>
                        <button className="add-button" disabled={quantity > 0} onClick={() => dispatch(addItem(plant))} aria-label={quantity > 0 ? `${plant.name} already added to cart` : `Add ${plant.name} to cart`}>
                          {quantity > 0 ? 'Added to Cart' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
