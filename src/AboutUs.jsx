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
        <img className="about-image" src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=85" alt="Healthy green indoor plants" />
        <div className="about-copy">
          <h2>A greener home starts here.</h2>
          <p>Paradise Nursery is an online houseplant shop dedicated to helping everyone enjoy the beauty and benefits of indoor plants. We offer carefully selected plants for new plant parents and experienced collectors.</p>
          <p>Our mission is to make choosing and caring for plants simple. From air-purifying favourites to decorative foliage, we help you find the right green companion for your home or workspace.</p>
          <p><strong>Our promise:</strong> thoughtful plant selections, helpful care guidance, and a welcoming experience for every customer.</p>
        </div>
      </section>
    </main>
  );
}