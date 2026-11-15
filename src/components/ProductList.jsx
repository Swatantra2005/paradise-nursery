import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';
import { plantCategories } from '../data/plants';

export default function ProductList({ onOpenCart }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const quantityInCart = (id) => cartItems.find((item) => item.id === id)?.quantity || 0;

  return (
    <main className="content-wrap">
      <div className="section-heading">
        <p className="eyebrow">FIND YOUR GREEN COMPANION</p>
        <h1>Plants for every space</h1>
        <p>Choose a little natural beauty for your home or workspace.</p>
      </div>
      {plantCategories.map((group) => (
        <section className="category-block" key={group.category}>
          <h2 className="category-title">{group.category}</h2>
          <div className="product-grid">
            {group.plants.map((plant) => (
              <article className="product-card" key={plant.id}>
                <img className="product-photo" src={plant.image} alt={plant.name} loading="lazy" />
                <div className="product-body">
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="product-meta">
                    <span className="price">${plant.price.toFixed(2)}</span>
                    <button
                      className="add-button"
                      onClick={() => dispatch(addItem(plant))}
                      aria-label={`Add ${plant.name} to cart`}
                    >
                      {quantityInCart(plant.id) > 0 ? `Add another (${quantityInCart(plant.id)})` : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <div style={{ textAlign: 'center', marginTop: 38 }}>
        <button className="secondary-button" onClick={onOpenCart}>View shopping cart →</button>
      </div>
    </main>
  );
}