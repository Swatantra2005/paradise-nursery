import React, { useState } from 'react';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

export default function App() {
  const [page, setPage] = useState('home');

  const goToShop = () => setPage('shop');
  const goToCart = () => setPage('cart');
  const goHome = () => setPage('home');

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={goHome} aria-label="Paradise Nursery home">
          <span className="brand-mark">✿</span>
          <span>Paradise <strong>Nursery</strong></span>
        </button>
        <nav className="main-nav" aria-label="Main navigation">
          <button className={page === 'home' ? 'active' : ''} onClick={goHome}>Home</button>
          <button className={page === 'shop' ? 'active' : ''} onClick={goToShop}>Plants</button>
          <button className={page === 'about' ? 'active' : ''} onClick={() => setPage('about')}>About Us</button>
        </nav>
        <button className="cart-nav" onClick={goToCart} aria-label="Open shopping cart">🛒 <span>Cart</span></button>
      </header>

      {page === 'home' && (
        <main className="landing">
          <div className="landing-image" role="img" aria-label="Sunlit room filled with lush indoor plants" />
          <div className="landing-overlay" />
          <section className="hero-content">
            <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
            <h1>Bring the beauty<br />of nature <em>home.</em></h1>
            <p className="hero-copy">Thoughtfully chosen plants to make your space feel calmer, greener, and more alive.</p>
            <button className="primary-button" onClick={goToShop}>Get Started <span>→</span></button>
            <div className="hero-note">Curated plants · Happy homes · Greener days</div>
          </section>
        </main>
      )}

      {page === 'shop' && <ProductList onOpenCart={goToCart} />}
      {page === 'cart' && <CartItem onContinueShopping={goToShop} />}
      {page === 'about' && <AboutUs />}
      <footer className="site-footer">
        <span>✿ Paradise Nursery</span>
        <span>Grow joy, one leaf at a time.</span>
      </footer>
    </div>
  );
}