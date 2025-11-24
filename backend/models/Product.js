const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category:{ type: String, default: 'General' },
  price: { type: Number, required: true },
  rating: { type: Number, default: 4 },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
