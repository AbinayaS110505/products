import React from 'react';
import heroImg from '../assets/img/img1.jpg'; // rename if necessary

export default function Hero(){
  return (
    <section className="hero-banner" style={{backgroundImage:`url(${heroImg})`}}>
      <div className="hero-inner">
        <div className="tag">Flash Sale • Limited Time</div>
        <h1 className="hero-heading">Huge November Deals — Up to 70% OFF</h1>
        <p className="hero-sub">Top brands. Best prices. Shop now before the sale ends.</p>
        <a className="cta huge gradient" href="/products">Explore Offers</a>
      </div>
    </section>
  );
}
