import React from 'react';

export default function AboutUs() {
  return (
    <main className="content-wrap">
      <div className="section-heading">
        <p className="eyebrow">ROOTED IN CARE</p>
        <h1>About Paradise Nursery</h1>
        <p>Helping people make room for nature, one plant at a time.</p>
      </div>
      <section className="about-grid">
        <img
          className="about-image"
          src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85"
          alt="Collection of healthy green indoor plants"
        />
        <div className="about-copy">
          <h2>A greener home starts here.</h2>
          <p>Paradise Nursery is built around a simple belief: a little more green can make everyday spaces feel more welcoming. We bring together beautiful, easy-to-love indoor plants for first-time plant parents and experienced collectors alike.</p>
          <p>We focus on thoughtful plant selections, helpful care guidance, and a friendly shopping experience. From a sunny windowsill to a quiet reading corner, our goal is to help you find the right plant for your space and lifestyle.</p>
          <p><strong>Our promise:</strong> grow with curiosity, care for every leaf, and enjoy the calm that nature brings indoors.</p>
        </div>
      </section>
    </main>
  );
}