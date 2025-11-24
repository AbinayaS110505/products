// import React from 'react';
// import ProductCard from './ProductCard';

// // import local images
// import img1 from '../assets/img/img1.jpg';
// import img2 from '../assets/img/img2.jpg';
// import img3 from '../assets/img/img3.jpg';
// import img4 from '../assets/img/img4.jpg';
// import img5 from '../assets/img/img5.jpg';
// import img6 from '../assets/img/img6.jpg';
// import img7 from '../assets/img/img7.jpg';
// import img8 from '../assets/img/img8.jpg';

// import img9 from '../assets/img/img1.jpg';
// import img10 from '../assets/img/img9.jpg';

// import img11 from '../assets/img/img10.jpg';
// import img12 from '../assets/img/img11.jpg';
// import img13 from '../assets/img/img12.jpg';
// import img14 from '../assets/img/img13.jpg';
// import img15 from '../assets/img/img14.jpg';
// import img16 from '../assets/img/img15.jpg';
// import img17 from '../assets/img/img16.jpg';




// const sampleProducts = [
//   { id:1, name:'Smartphone Max 20', price:39999, rating:5, category:'Electronics', image:img1 },
//   { id:2, name:'Sport Headphones', price:1999, rating:4, category:'Electronics', image:img2 },

//   { id:3, name:'Running Shoes Pro', price:2999, rating:5, category:'Footwear', image:img3 },
//   { id:4, name:'Classic Watch', price:4999, rating:4, category:'Accessories', image:img4 },
//   { id:5, name:'Leather Wallet', price:799, rating:4, category:'Accessories', image:img8 },
//   { id:6, name:'4K Smart TV 55"', price:55999, rating:5, category:'Electronics', image:img6 },
//   { id:7, name:'Blender Pro 700W', price:3499, rating:4, category:'Home Appliances', image:img17 },
//    { id:12, name:'Smartphone Max 20', price:39999, rating:5, category:'Electronics', image:img1 },
//   { id:22, name:'Sport Headphones', price:1999, rating:4, category:'Electronics', image:img2 },
//   { id:32, name:'Running Shoes Pro', price:2999, rating:5, category:'Footwear', image:img3 },
//   { id:42, name:'Classic Watch', price:4999, rating:4, category:'Accessories', image:img4 },
//   { id:52, name:'Leather Wallet', price:799, rating:4, category:'Accessories', image:img5 },
//       { id:1, name:'Smartphone Max 20', price:39999, rating:5, category:'Electronics', image:img1 },

//   { id:62, name:'4K Smart TV 55"', price:55999, rating:5, category:'Electronics', image:img6 },
//   { id:72, name:'Blender Pro 700W', price:3499, rating:4, category:'Home Appliances', image:img15 },
//   // duplicate entries to reach 10-12 items (or add more)
//   { id:18, name:'Smartphone Lite', price:19999, rating:4, category:'Electronics', image:img1 },
//   { id:19, name:'Casual T-Shirt', price:599, rating:3, category:'Clothing', image:img2 },
//   { id:10, name:'Designer Sunglasses', price:1299, rating:4, category:'Accessories', image:img16 },
//    { id:11, name:'Smartphone Max 20', price:39999, rating:5, category:'Electronics', image:img1 },
//   { id:120, name:'Sport Headphones', price:1999, rating:4, category:'Electronics', image:img2 },
//   { id:13, name:'Running Shoes Pro', price:2999, rating:5, category:'Footwear', image:img3 },
//   { id:14, name:'Classic Watch', price:4999, rating:4, category:'Accessories', image:img4 },
//   { id:15, name:'Leather Wallet', price:799, rating:4, category:'Accessories', image:img5 },
//   { id:16, name:'4K Smart TV 55"', price:55999, rating:5, category:'Electronics', image:img6 },
//   { id:17, name:'Blender Pro 700W', price:3499, rating:4, category:'Home Appliances', image:img8 },
//    { id:111, name:'Smartphone Max 20', price:39999, rating:5, category:'Electronics', image:img10 },
//   { id:121, name:'Sport Headphones', price:1999, rating:4, category:'Electronics', image:img9 },
//   { id:131, name:'Running Shoes Pro', price:2999, rating:5, category:'Footwear', image:img11 },
//   { id:114, name:'Classic Watch', price:4999, rating:4, category:'Accessories', image:img12 },
//   { id:115, name:'Leather Wallet', price:799, rating:4, category:'Accessories', image:img13 },
//   { id:116, name:'4K Smart TV 55"', price:55999, rating:5, category:'Electronics', image:img14 },
//   { id:117, name:'Blender Pro 700W', price:3499, rating:4, category:'Home Appliances', image:img15 }
// ];

// export default function ProductGrid({ filterCategory = 'All', query = '' }){
// const filtered = sampleProducts.filter(p => {
//   const matchCategory = filterCategory === "All" ? true : p.category === filterCategory;
//   const matchQuery = p.name.toLowerCase().includes(query.toLowerCase());
//   return matchCategory && matchQuery;
// });


//   return (
//     <section className="products-section container">
//       <div className="controls">
//         <div className="info">{filtered.length} products</div>
//       </div>
//       <div className="product-grid">
//         {filtered.map(p => <ProductCard key={p.id} product={p} />)}
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import products1 from "../data/products1"// your dummy data file
// import { useLocation } from "react-router-dom";

// export default function ProductGrid() {
//   const { search } = useLocation();
//   const params = new URLSearchParams(search);

//   const q = params.get("q")?.toLowerCase() || "";
//   const category = params.get("category") || "";
//   const price = params.get("price") || "";

//   // ----- PRICE FILTER -----
//   function matchPrice(p) {
//     if (!price) return true; // no filter
//     const [min, max] = price.split("-").map(Number);
//     return p.price >= min && p.price <= max;
//   }

//   // ----- FINAL FILTER -----
//   const filtered = products1.filter((p) => {
//     const matchName = p.name.toLowerCase().includes(q);
//     const matchCategory = category ? p.category === category : true;
//     const matchPriceRange = matchPrice(p);
//     return matchName && matchCategory && matchPriceRange;
//   });

//   return (
//     <div className="grid-container">
//       {filtered.length === 0 ? (
//         <h3>No products found</h3>
//       ) : (
//         filtered.map((p) => (
//           <div key={p.id} className="product-card">
//             <img src={p.image} alt={p.name} />
//             <h4>{p.name}</h4>
//             <p>₹{p.price}</p>
//             <p>{p.category}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }


import React from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

// ---- your complete sampleProducts list ----
import img1 from '../assets/img/img1.jpg';
import img2 from '../assets/img/img2.jpg';
import img3 from '../assets/img/img3.jpg';
import img4 from '../assets/img/img4.jpg';
import img5 from '../assets/img/img5.jpg';
import img6 from '../assets/img/img6.jpg';
import img7 from '../assets/img/img7.jpg';
import img8 from '../assets/img/img8.jpg';
import img9 from '../assets/img/img1.jpg';
import img10 from '../assets/img/img9.jpg';
import img11 from '../assets/img/img10.jpg';
import img12 from '../assets/img/img11.jpg';
import img13 from '../assets/img/img12.jpg';
import img14 from '../assets/img/img13.jpg';
import img15 from '../assets/img/img14.jpg';
import img16 from '../assets/img/img15.jpg';
import img17 from '../assets/img/img16.jpg';

const sampleProducts = [
  { id: 1, name: 'Smartphone Max 20', price: 39999, category: 'Electronics', image: img1 },
  { id: 2, name: 'Laptop', price: 1999, category: 'Electronics', image: img2 },
  { id: 3, name: 'Bluetooth Speakers', price: 2999, category: 'Electronics', image: img3 },
  { id: 4, name: 'Tops for women', price: 4999, category: 'Accessories', image: img4 },
  { id: 5, name: 'water bottle', price: 799, category: 'Home Appliances', image: img5 },
  { id: 6, name: 'bottle-toy"', price: 55999, category: 'Home Appliances', image: img6 },
  { id: 7, name: 'Bag', price: 3499, category: 'Accessoriess', image: img7 },
  { id: 12, name: 'Smartphone Max 20', price: 39999, category: 'Electronics', image: img1 },
  { id: 22, name: 'Laptop', price: 1999, category: 'Electronics', image: img2 },
  { id: 32, name: 'Bluetooth Speakers', price: 2999, category: 'Footwear', image: img3 },
  { id: 42, name: 'Classic top', price: 4999, category: 'Accessories', image: img4 },
  { id: 52, name: 'Leather bottle', price: 799, category: 'Accessories', image: img5 },
  { id: 62, name: 'kids bottle"', price: 55999, category: 'Accessories', image: img6 },
  { id: 72, name: 'Blender Pro', price: 3499, category: 'Accessories', image: img15 },
  { id: 18, name: 'iphone17-Smartphone', price: 19999, category: 'Electronics', image: img1 },
  { id: 19, name: 'laptop-dell', price: 599, category: 'Electronics', image: img2 },
  { id: 10, name: 'camara-120 pro', price: 1299, category: 'Electronics', image: img16 },
  { id: 111, name: 'Casual T-Shirt', price: 39999, category: 'Accessories', image: img10 },
  { id: 121, name: 'Sport Headphones', price: 1999, category: 'Electronics', image: img9 },
  { id: 131, name: 'Running Shoes Pro', price: 2999, category: 'Accessories', image: img11 },
  { id: 114, name: 'Classic Watch', price: 4999, category: 'Accessories', image: img12 },
  { id: 115, name: 'Designer Sunglasses', price: 799, category: 'Accessories', image: img13 },
  { id: 116, name: 'footware"', price: 55999, category: 'Accessories', image: img14 },
  { id: 117, name: 'let', price: 3499, category: 'Home Appliances', image: img15 }
];

export default function ProductGrid() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const q = params.get("q")?.toLowerCase() || "";
  const category = params.get("category") || "";
  const price = params.get("price") || "";

  // ---- price filter function ----
  function matchPrice(p) {
    if (!price) return true;
    const [min, max] = price.split("-").map(Number);
    return p.price >= min && p.price <= max;
  }

  // ---- final filtering ----
  const filtered = sampleProducts.filter((p) => {
    const matchName = p.name.toLowerCase().includes(q);
    const matchCategory = category ? p.category === category : true;
    const matchPriceRange = matchPrice(p);

    return matchName && matchCategory && matchPriceRange;
  });

  return (
    <div className="product-grid">
      {filtered.length === 0 ? (
        <h3>No products found</h3>
      ) : (
        filtered.map((p) => <ProductCard key={p.id} product={p} />)
      )}
    </div>
  );
}
