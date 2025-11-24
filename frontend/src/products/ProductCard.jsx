import React from 'react';

export default function ProductCard({ product }) {

const rating = product.rating || 0;

const fullStars = Math.floor(rating);
const halfStar = rating % 1 >= 0.5;
const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

const full = "★".repeat(fullStars);
const half = halfStar ? "⯪" : "";
const empty = "★".repeat(emptyStars);


  return (
    <article className="product-card">
      <div className="product-thumb">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-body">
        <h3 className="product-name">{product.name}</h3>

        <div className="product-meta" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          
          {/* ⭐ Rating */}
          <p className="rating" style={{ color: "gold", fontSize: "18px" }}>
            {full}{half}{empty}
          </p>

          {/* 💰 Price */}
          <div className="price">₹{product.price}</div>
        </div>
      </div>
    </article>
  );
}
