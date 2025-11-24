const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const MONGODB_URI = process.env.MONGODB_URI;

const sample = [
  { name: 'Smartphone Max 20', category:'Electronics', price:39999, rating:5, image:'https://via.placeholder.com/400x300?text=Phone' },
  { name: 'Smartphone Lite 11', category:'Electronics', price:19999, rating:4, image:'https://via.placeholder.com/400x300?text=Phone+Lite' },
  { name: 'Sport Headphones', category:'Electronics', price:1999, rating:4, image:'https://via.placeholder.com/400x300?text=Headphones' },
  { name: 'Running Shoes Pro', category:'Footwear', price:2999, rating:5, image:'https://via.placeholder.com/400x300?text=Shoes' },
  { name: 'Classic Watch', category:'Accessories', price:4999, rating:4, image:'https://via.placeholder.com/400x300?text=Watch' },
  { name: 'Leather Wallet', category:'Accessories', price:799, rating:4, image:'https://via.placeholder.com/400x300?text=Wallet' },
  { name: '4K Smart TV 55"', category:'Electronics', price:55999, rating:5, image:'https://via.placeholder.com/400x300?text=TV' },
  { name: 'Blender Pro 700W', category:'Home Appliances', price:3499, rating:4, image:'https://via.placeholder.com/400x300?text=Blender' },
  { name: 'Office Chair Ergonomic', category:'Furniture', price:8999, rating:4, image:'https://via.placeholder.com/400x300?text=Chair' },
  { name: 'Cotton T-Shirt', category:'Clothing', price:499, rating:3, image:'https://via.placeholder.com/400x300?text=T-Shirt' },
  { name: 'Designer Sunglasses', category:'Accessories', price:1299, rating:4, image:'https://via.placeholder.com/400x300?text=Sunglasses' },
  { name: 'Gaming Mouse X', category:'Electronics', price:2499, rating:5, image:'https://via.placeholder.com/400x300?text=Mouse' }
];

async function seed(){
  try{
    await mongoose.connect(MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(sample);
    console.log('Seeded products');
    process.exit(0);
  }catch(err){
    console.error(err);
    process.exit(1);
  }
}

seed();
