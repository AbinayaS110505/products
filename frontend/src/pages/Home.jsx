import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../products/ProductGrid';

export default function Home(){
  return (
    <>
      <Navbar />
      <Hero />
      <ProductGrid />
    </>
  );
}
