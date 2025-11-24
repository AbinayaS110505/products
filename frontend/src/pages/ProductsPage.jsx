import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../products/ProductGrid';

export default function ProductsPage(){
  // Query param support could be added to accept search query from header
  return (
    <>
      <Navbar />
      <div className="container page-title">
        <h2>All Products</h2>
      </div>
      <ProductGrid />
    </>
  );
}
