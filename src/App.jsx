import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const cartCount = useSelector((state) => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => setPage('home')} aria-label="Paradise Nursery home">
          <span className="brand-mark">✿</span><span>Paradise <strong>Nursery</strong></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={page === 'home' ? 'active' : ''} onClick={() => setPage('home')}>Home</button>
          <button className={page === 'shop' ? 'active' : ''} onClick={() => setPage('shop')}>Plants</button>
          <button className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')}>About Us</button>
        </nav>
        <button className="cart-nav" onClick={() => setPage('cart')} aria-label={`Shopping cart with ${cartCount} items`}>🛒 Cart <span className="cart-count">{cartCount}</span></button>
      </header>
      {page === 'home' && (
        <main className="landing">
          <div className="landing-image" role="img" aria-label="Sunlit room filled with indoor plants" />
          <div className="landing-overlay" />
          <section className="hero-content">
            <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
            <h1>Paradise Nursery<br />Bring nature <em>home.</em></h1>
            <p className="hero-copy">Welcome to Paradise Nursery, your destination for beautiful houseplants. Discover greenery that brightens your home, refreshes your space, and brings a little calm to every day.</p>
            <button className="primary-button" onClick={() => setPage('shop')}>Get Started <span>→</span></button>
            <div className="hero-note">Curated plants · Happy homes · Greener days</div>
          </section>
        </main>
      )}
      {page === 'shop' && <ProductList onOpenCart={() => setPage('cart')} />}
      {page === 'cart' && <CartItem onContinueShopping={() => setPage('shop')} />}
      {page === 'about' && <AboutUs />}
      <footer className="site-footer"><span>✿ Paradise Nursery</span><span>Grow joy, one leaf at a time.</span></footer>
    </div>
  );
}