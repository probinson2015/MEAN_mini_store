var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  product_name: { type: String, trim: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  description: {type: String},
  quantity: { type: Number},
  img_url: {type: String},
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref:'Order'}]
});

mongoose.model('Product', ProductSchema);
ProductSchema.path('product_name').required(true, "Product Name is required");