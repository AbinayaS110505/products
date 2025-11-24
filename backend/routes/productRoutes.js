const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products -> return all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ name: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /search?q=term -> return up to 5 partial case-insensitive matches by name
router.get('/search', async (req, res) => {
  try {
    const q = req.query.q || '';
    if (!q.trim()) return res.json([]);
    const regex = new RegExp(q, 'i');
    const results = await Product.find({ name: { $regex: regex } }).limit(5);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
